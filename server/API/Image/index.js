//Libraries
import express from "express";
import multer from "multer";


//DATABASE MODEL
import { ImageModel } from "../../database/allModel";

//Utils
import { s3Upload } from "../../Utils/AWS/s3";


const Router = express.Router();

//Multer config
const storage = multer.memoryStorage();
const upload = multer({storage});


/*
    Route          /
    Description    Uploading given image to S3 bucket, then saving the file to mongoDB
    Access         Public
    Method         GET
    Params         none
*/

Router.post("/" , upload.single("file") ,async(req, res) => {
    try {
        const file = req.file;

        const bucketOptions = {
            Bucket: "krave",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read",
        };


        const uploadImage = await s3Upload(bucketOptions);

        return res.status(200).json({ uploadImage });

    } catch (e) {
        return res.status(500).json({error : e.message});
    }
});


export default Router;