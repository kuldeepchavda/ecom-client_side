const validate = (schema) => async(req,res,next)=>{
    try {
        const parsedBody = await schema.parseAsync(req.body);
        req.body = parsedBody; 
        next();
    } catch (err) {
        const status = 422;
        // const message = "fill the inputs correctly"
        const msg = err.message;
        const error = {
            status,
            // message,
            msg
        };
        next(error)
    }
};

module.exports = validate;