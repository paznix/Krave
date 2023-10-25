import express from "express";

const Router = express.Router();

//Models
import { UserModel } from "../../database/user";

//Validation
import { ValidationSignup , ValidationSignin } from "../../Validation/auth";

/*
    Route          /signup
    Description    Signup User
    Access         Public
    Method         POST
    Params         None
*/

Router.post("/signup", async (req, res) => {
  try {

    await ValidationSignup(req.body.credentials);

    await UserModel.findEmailAndPhone(req.body.credentials);

    //DB
    const newUser = await UserModel.create(req.body.credentials);

    //JWT Auth Token
    const token = newUser.generateJwtToken();

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});


/*
    Route          /signin
    Description    Signin User
    Access         Public
    Method         POST
    Params         None
*/

Router.post("/signin", async (req, res) => {
  try {
    await ValidationSignin(req.body.credentials);

    const user = await UserModel.findByEmailAndPassword(
      req.body.credentials
    );

    await UserModel.findEmailAndPhone(req.body.credentials);

    //JWT Auth Token
    const token = user.generateJwtToken();

    return res.status(200).json({ token , status:"Success!"});
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
