import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    address: [{ detail: { type: String }, for: { type: String } }],
    phoneNumber: [{ type: Number }],
  },
  {
    timestamps: true,
  }
);

//JWT Auth
UserSchema.methods.generateJwtToken = function() {
  return jwt.sign({user: this._id.toString()}, "ZomatoApp");
};

UserSchema.statics.findEmailAndPhone = async ({ email, phoneNumber }) => {
  // check email exists?
  const checkUserByEmail = await UserModel.findOne({ email });

  // check phoneNumber Exists?
  const checkUserByPhone = await UserModel.findOne({ phoneNumber });
  if (checkUserByEmail || checkUserByPhone) {
    throw new Error("User already exists");
  }

  return false;
};

UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
  // check email exists?
  const user = await UserModel.findOne({ email });

  if (!user){
    throw new Error("User doesn't exists!")
  }

  // compare password
  const doesPassMatch = await bcrypt.compare(password, user.password);
  if (!doesPassMatch) {
    throw new Error("Invalid Password!");
  }

  return user;
};

UserSchema.pre("save", function(next) {
  const user = this;

  // password not modified
  if (!user.isModified("password")) return next();

  // hashing the password
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    // assigning hashed password
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      return next();
    });
  });

  
});

export const UserModel = mongoose.model("Users", UserSchema);
