import  express  from "express";
import { RestaurantModel } from "../../database/allModel";

import { ValidationResCity , ValidationResSearch } from "../../Validation/restaurant";
import { ValidationResId } from "../../Validation/food";


const Router = express.Router();

/*
    Route          /
    Description    Get All restaurants
    Access         Public
    Method         GET
    Params         None
*/

Router.get("/", async(req, res) => {
    try{

        await ValidationResCity(req.query);

        const {city} = req.query;
        const restaurants = await RestaurantModel.find({city});
        return res.json({restaurants});
    } catch(error){
        return res.status(500).json({error: error.message});
    }
});


/*
    Route          /
    Description    Get particular restaurant details on id
    Access         Public
    Method         GET
    Params         _id
*/

Router.get(":_id", async (req, res) => {
    try {
        await ValidationResId(req.params);

        const {_id} = req.params;
        const restaurant = await RestaurantModel.findOne(_id);

        if(!restaurant){
            return res.status(404).json({error: "Restaurant not found!"});
        }

        return res.json({restaurant});

    } catch(error){
        return res.status(500).json({error: error.message});
    }
});


/*
    Route          /
    Description    Get Restaurant details on search
    Body           searchString
    Access         Public
    Method         GET
    Params         none
*/

Router.get("search", async(req, res) => {
    try{
        await ValidationResSearch(req.body);
        
        const {searchString} =  req.body;
        const restaurants = await RestaurantModel.find({
            name: {$regex: searchString, $options: "i"},
        });

    } catch(e) {
        return res.status(500).json({error: e.message});

    } 
});

export default Router;