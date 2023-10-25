import  express  from "express";

import { MenuModel, ImageModel } from "../../database/allModel";

const Router = express.Router();


/*
    Route          /list
    Description    Get all the list of  menu based  on id
    Access         Public
    Method         GET
    Params         _id
*/

Router.get("/list/:_id", async(req, res) => {
    try {
        const {_id} = req.params;
        const menus = await MenuModel.findOne(_id);

        return req.json({menus});

    } catch (e) {
        return res.status(500).json({error: e.message});
        
    }
});


/*
    Route          /iamge
    Description    Get menu image based on id
    Access         Public
    Method         GET
    Params         _id
*/

Router.get("/image/:_id", async(req, res) => {
    try {
        const {_id} = req.params;
        const menu = await ImageModel.findOne(_id);

        return res.json({menus});

    } catch (e) {
        return res.json(500).json({error: e.message});
        
    }
});


export default Router;