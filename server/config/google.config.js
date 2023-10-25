import googleOAuth from "passport-google-oauth20";

import { UserModel } from "../database/allModel";
import passport from "passport";

const GoogleStrategy = googleOAuth.Strategy;

export default (passport) => {
  passport.use(
    new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback"
    },
    async(accessToken, refreshToken, profile, done) => {
        // creating a new user
        const newUser = {
            fullName: profile.displayName,
            email: profile.emails[0].value,
            profilePic: profile.photos[0].value
        };

        try{
            // check whether user exists or not
            const user = await UserModel.findOne({email: newUser.email});
            // generating jwt token
            const token = user.generateJwtToken();
            if(user){
                // return user
                done(null, {user, token});
            }
            else{
                // create new user
                const user = await UserModel.create(newUser);
                done(null, {user, token});
            }
        }
        catch(error){
            done(error, null);
        }
    }
    )
  );

  passport.serializeUser((userData, done) => done(null, {...userData}));
  passport.deserializeUser((id, done) => done(null, id));

};
