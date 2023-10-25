import express from 'express';

import { UserModel } from '../../database/allModel';

const Router = express.Router();


/*
    Route          /_id
    Description    Get an user data
    Access         Public
    Method         GET
    Params         none
*/

Router.get("/:_id" , async (req, res) => {
    try {
        const { _id } = req.params;
        const getUser = await UserModel.findById(_id);

        return res.json({user: getUser});

    } catch (e) {
        return res.status(500).json({error : e.message});
    }
});


/*
    Route          /update
    Description    Update an user data
    Access         Public
    Body           User Data
    Method         PUT
    Params         _userId
*/

Router.put("/update/:_userId" , async (req, res) => {
    try {
        const { userId } = req.params;
        const {userData} = req.body;
        const updateUserData = await UserModel.findByIdAndUpdate(
            userId,{
                $set: userData
            },
            {
                new:true
            }
        );

        return res.json({user: updateUserData});

    } catch (e) {
        return res.status(500).json({error : e.message});
    }
});

export default Router;