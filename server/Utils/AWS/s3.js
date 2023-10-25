import AWS from "aws-sdk";


//AWS S3 bucket config
export const s3Bucket = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "ap-south-1",
});


export const s3Upload = (options) => {
    return new Promise((resolve, reject) => {
        // S3 ManagedUpload with callbacks are not supported in AWS SDK for JavaScript (v3).
        // Please convert to 'await client.upload(params, options).promise()', and re-run aws-sdk-js-codemod.
        s3Bucket.upload(options, (error, data) => {
            if(error) return reject(error);
            return resolve(data);
        });
    });
};