const constansts = require("../helpers/constansts");

// validation
module.exports.validate = (schema, validationFor = "body") => {
  return (req, res, next) => {
    const response = { ...constansts.defaultServerResponse };

    let data = null;

    if (validationFor == "body") {
      data = req.body;
    } else if (validationFor == "query") {
      data = req.query;
    } else if (validationFor == "params") {
      data = req.params;
    }

    const validationResponse = schema.validate(data, {
      abortEarly: false,
    });

    if (validationResponse?.error) {
      const error = {};
      for (err of validationResponse.error.details) {
        const key = err?.context?.key;
        error[key] = err.message;
      }
      return res.status(response.status).send(response);
    }
    next();
  };
};
