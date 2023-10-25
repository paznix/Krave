import express from "express";
import passport from "passport";

import { FoodModel } from "../../database/allModel";

import { ValidateResId , ValidationCat } from "../../Validation/food"

const Router = express.Router();


/*
    Route          /
    Description    Get all the foods based on particular restaurant
    Access         Public
    Method         GET
    Params         _id
*/

Router.get("/:_id", async(req, res) => {
    try {

        await ValidateResId(req.params);

        const {_id} = req.params;
        const foods = await FoodModel.find({ restaurant : _id});

        return res.json({ foods })

    } catch (e) {
        return res.status(500).json({error: e.message});
        
    }
});


/*
    Route          /r
    Description    Get all the foods based on category
    Access         Public
    Method         GET
    Params         category
*/

Router.get("/r/:category", async(req, res) => {
    try {
        await ValidationCat(req.params);

        const {category} = req.params;
        const foods = await FoodModel.find({
            category : {$regex: category, $options: "i"},
        })

        return res.json({ foods })

    } catch (e) {
        return res.status(500).json({error: e.message});
        
    }
});



export default Router;