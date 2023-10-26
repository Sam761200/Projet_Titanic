const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(403).send('no token');
  }

  try {
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    req.token = decodedToken;
    next();
  } catch (err) {
    console.log('invalid token provided :', err.message);
    return res.status(403).send('invalid token');
  }
};