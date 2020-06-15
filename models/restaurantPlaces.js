const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//= ===============================
// RestaurantPlaces Schema
//= ===============================

const RestaurantPlacesSchema = new Schema({
    '0': {
        type: String,
        unique: true,
        required: [true, 'Name field is required']
    },
    '1': {
        type: String,
        unique: true,
        required: [true, 'Name field is required']
    },
    '2': {
        type: String,
        unique: true,
        required: [true, 'Name field is required']
    },
    '3': {
        type: String,
        unique: true,
        required: [true, 'Name field is required']
    },
    '4': {
        type: String,
        unique: true,
        required: [true, 'Name field is required']
    },
    '5': {
        type: String,
        unique: true,
        required: [true, 'Name field is required']
    },
    '6': {
        type: String,
        unique: true,
        required: [true, 'Name field is required']
    },
    '7': {
        type: String,
        unique: true,
        required: [true, 'Name field is required']
    },
    '8': {
        type: String,
        unique: true,
        required: [true, 'Name field is required']
    },
    '9': {
        type: String,
        unique: true,
        required: [true, 'Name field is required']
    },
    '10': {
        type: String,
        unique: true,
        required: [true, 'Name field is required']
    },
    '11': {
        type: String,
        unique: true,
        required: [true, 'Name field is required']
    },
    '12': {
        type: String,
        unique: true,
        required: [true, 'Name field is required']
    },
    '13': {
        type: String,
        unique: true,
        required: [true, 'Name field is required']
    },
    '14': {
        type: String,
        unique: true,
        required: [true, 'Name field is required']
    },
    '15': {
        type: String,
        unique: true,
        required: [true, 'Name field is required']
    },
    '16': {
        type: String,
        unique: true,
        required: [true, 'Name field is required']
    },
    '17': {
        type: String,
        unique: true,
        required: [true, 'Name field is required']
    },
    '18': {
        type: String,
        unique: true,
        required: [true, 'Name field is required']
    },
    '19': {
        type: String,
        unique: true,
        required: [true, 'Name field is required']
    }
})

const Restaurants = mongoose.model('restaurants', RestaurantPlacesSchema)

module.exports = Restaurants;