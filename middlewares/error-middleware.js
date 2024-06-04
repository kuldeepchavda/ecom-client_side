const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  let msg = "Error from backend ('error from error middleware')";

  if (err.msg) {
    try {
      const parsedMsg = JSON.parse(err.msg);
      if (Array.isArray(parsedMsg) && parsedMsg[0] && parsedMsg[0].message) {
        msg = parsedMsg[0].message;
      }
    } catch (parseError) {
      console.error("Failed to parse error message:", parseError);
    }
  }

  return res.status(status).json({this: err });
};

// module.exports = errorMiddleware;

module.exports = errorMiddleware;
