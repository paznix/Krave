import joi from 'joi';

export const ValidationSignup = (userData) => {
    
    const Schema = joi.object({
        fullName: joi.string().required().min(3),
        email: joi.string().email(),
        password: joi.string().min(8),
        address: joi.array().items(joi.object({detail: joi.string(), for: joi.string()})),
        phoneNumber: joi.number().min(10).max(10)
    });

    return Schema.validateAsync(userData);

};


export const ValidationSignin = (userData) => {
    
    const Schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(8).required(),
    });

    return Schema.validateAsync(userData);

};