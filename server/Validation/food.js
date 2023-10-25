import joi from 'joi';

export const ValidationResId = (resId) => {
    
    const Schema = joi.object({
        _id: joi.string().required()
    });

    return Schema.validateAsync(resId);

};

export const ValidationCat = (category) => {
    
    const Schema = joi.object({
        category: joi.string().required()
    });

    return Schema.validateAsync(category);

};