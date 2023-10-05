import * as yup from 'yup';

const callbackBodySchema = yup.object().shape({
    identifier: yup.string().required(),
    password: yup.string().required(),
});

const validateCallbackBody = (data: any) => {
    return callbackBodySchema.validate(data);
};

export {
    validateCallbackBody
};