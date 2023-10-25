import express from 'express';
import passport from 'passport';
import { OrderModel } from '../../database/allModel';

const Router = express.Router();


/*
    Route          /
    Description    Get all orders based on _id
    Access         Public
    Method         GET
    Params         _id
*/

Router.get("/:_id", passport.authenticate("jwt", {session: false}) ,async (req,res) => {
    try {
        const { _id }= req.params;
        const getOrders = await OrderModel.findOne({user : _id});

        if(!getOrders){
            return res.statusCode(404).json({error : "User not Found"});
        }

    } catch (e) {
        return res.statusCode(500).json({error: e.message});        
    }
});


/*
    Route          /new
    Description    Add new order
    Access         Public
    Method         POST
    Params         _id
*/

Router.post("/new/:_id", async (req,res) => {
    try {
        const {_id} = req.params;
        const {orderDetails} = req.body;
        const addNewOrder = await OrderModel.findOneAndUpdate(
            {
                user: _id
            },
            {
                $push: {orderDetails: orderDetails}
            },
            {
                new: true
            }
        );

        return res.json({order: addNewOrder});

    } catch (e) {
        return res.statusCode(500).json({error: e.message});             
    }
});

export default Router;