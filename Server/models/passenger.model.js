const mongoose = require('mongoose');

const passengerSchema = new mongoose.Schema(
    {
        PassengerId: {
            type:Number,
        },
        Survived: {
            type:Number,
        },
        Pclass: {
            type:Number,
        },
        Name: {
            type: String,
          },
        Sex: {
            type:String,
        },
        Age: {
            type:Number,
        },
        SibSp: {
            type:Number,
        },
        Parch: {
            type:Number,
        },
        Ticket: {
            type:String,
        },
        Fare: {
            type:Number,
        },
        Cabin: {
            type:String,
        },
        Embarked: {
            String,
        }
    },
    {
        timestamps: true,
    }
);

const PassengerModel = mongoose.model("passenger", passengerSchema, "passengers");

module.exports = PassengerModel;