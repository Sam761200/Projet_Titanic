const PassengerModel = require('../models/passenger.model');

module.exports.getAllUsers = async (req, res) => {
    const passengers = await PassengerModel.find()
    res.status(200).json(passengers);
  };

  module.exports.getUsersByFiltrer = async (req, res) => {
    const Sex = req.body.Sex;
    const Age = req.body.Age;
    const Pclass = req.body.Pclass;

    let data = {}

    if (Sex) {
        data.Sex = Sex
    }

    if (Age) {
        data.Age = Age
    }

    if (Pclass) {
        data.Pclass = Pclass
    }

    console.log(data)
    const passengers = await PassengerModel.find(data)
    res.status(200).json(passengers)
  };