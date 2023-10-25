import joi from 'joi';

export const ValidationResCity = (resObj) => {
    
    const Schema = joi.object({
        city: joi.string().required()
    });

    return Schema.validateAsync(resObj);

};

export const ValidationResSearch = (resObj) => {
    
    const Schema = joi.object({
        searchString: joi.string().required()
    });

    return Schema.validateAsync(resObj);

};