import express from 'express';

import { ReviewModel } from '../../database/allModel';

const Router = express.Router();


/*
    Route          /new
    Description    Add new review
    Body           Review Object
    Access         Public
    Method         POST
    Params         none
*/

Router.post("/new" , async (req, res) => {
    try {
        const {reviewData} = req.body;
        await ReviewModel.create(reviewData);

        return res.json({review: "Succesfully created Review"});

    } catch (e) {
        return res.status(500).json({error : e.message});
    }
});


/*
    Route          /delete
    Description    Delete a review
    Access         Public
    Method         DELETE
    Params         _id
*/

Router.delete("/new" , async (req, res) => {
    try {
        const { _id } = req.params;
        await ReviewModel.findByIdAndDelete(_id);

        return res.json({review: "Succesfully deleted Review"});

    } catch (e) {
        return res.status(500).json({error : e.message});
    }
});

export default Router;