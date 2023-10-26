const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
    return jwt.sign({id}, process.env.TOKEN_SECRET, {
      expiresIn: maxAge
    })
  };

  module.exports.signUp = async (req, res) => {
    const { pseudo, email, password } = req.body;
  
    try {
      const existingUser = await UserModel.findOne({ pseudo });
      if (existingUser) {
        return res.status(400).json({ pseudo: "Ce pseudo est déjà pris." });
      }

      const existingEmail = await UserModel.findOne({ email });
      if (existingEmail) {
        return res.status(400).json({ email: "Cet email est déjà utilisé." });
      }
  
      const user = await UserModel.create({ pseudo, email, password });
      res.status(201).json({ user: user._id });
    } catch (err) {
      res.status(400).json(err);
    }
  };
    

  module.exports.signIn = async (req, res) => {
    const { email, password } = req.body
  
    try {
      const user = await UserModel.login(email, password);
      const token = createToken(user._id);
      res.cookie('jwt', token, { httpOnly: true, maxAge});
      res.status(200).json({ user: user._id})
    } catch (err){
      //const errors = signInErrors(err);
      res.status(200).json(err);
    }
  }
  
  module.exports.logout = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
  }