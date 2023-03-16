const jwt = require("jsonwebtoken");

module.exports.validateUserToken = (req, res, next) => {
  const authorization = req?.headers?.authorization;

  if (!authorization) {
    res.send({ message: "Token is missing" });
  }

  // here we trim the 'Bearer' word from token
  const tokenString = authorization.substring(7);

  try {
    // user will get the whole object(payload)

    const user = jwt.verify(tokenString, process.env.JWT_SECRET_KEY);
    // console.log('user',user);
    req.params.userId = user.userId;
    next();
  } catch (error) {
    res.send({ message: "Invalid token", error: error.message });
  }
};
