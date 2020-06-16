const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//= ===============================
// RestaurantPlaces Schema
//= ===============================

const RestaurantPlacesSchema = new Schema({
    '0': {
        name: {
            type: String,
            default: 'no name'
        },
        location: {
            type: Schema.Types.Mixed,
            default: 'no location'
        },
        photo: {
            type: Schema.Types.Mixed,
            default: 'no photo'
        }
    },
    '1': {
        name: {
            type: String,
            default: 'no name'
        },
        location: {
            type: Schema.Types.Mixed,
            default: 'no location'
        },
        photo: {
            type: Schema.Types.Mixed,
            default: 'no photo'
        }
    },
    '2': {
        name: {
            type: String,
            default: 'no name'
        },
        location: {
            type: Schema.Types.Mixed,
            default: 'no location'
        },
        photo: {
            type: Schema.Types.Mixed,
            default: 'no photo'
        }
    },
    '3': {
        name: {
            type: String,
            default: 'no name'
        },
        location: {
            type: Schema.Types.Mixed,
            default: 'no location'
        },
        photo: {
            type: Schema.Types.Mixed,
            default: 'no photo'
        }
    },
    '4': {
        name: {
            type: String,
            default: 'no name'
        },
        location: {
            type: Schema.Types.Mixed,
            default: 'no location'
        },
        photo: {
            type: Schema.Types.Mixed,
            default: 'no photo'
        }
    },
    '5': {
        name: {
            type: String,
            default: 'no name'
        },
        location: {
            type: Schema.Types.Mixed,
            default: 'no location'
        },
        photo: {
            type: Schema.Types.Mixed,
            default: 'no photo'
        }
    },
    '6': {
        name: {
            type: String,
            default: 'no name'
        },
        location: {
            type: Schema.Types.Mixed,
            default: 'no location'
        },
        photo: {
            type: Schema.Types.Mixed,
            default: 'no photo'
        }
    },
    '7': {
        name: {
            type: String,
            default: 'no name'
        },
        location: {
            type: Schema.Types.Mixed,
            default: 'no location'
        },
        photo: {
            type: Schema.Types.Mixed,
            default: 'no photo'
        }
    },
    '8': {
        name: {
            type: String,
            default: 'no name'
        },
        location: {
            type: Schema.Types.Mixed,
            default: 'no location'
        },
        photo: {
            type: Schema.Types.Mixed,
            default: 'no photo'
        }
    },
    '9': {
        name: {
            type: String,
            default: 'no name'
        },
        location: {
            type: Schema.Types.Mixed,
            default: 'no location'
        },
        photo: {
            type: Schema.Types.Mixed,
            default: 'no photo'
        }
    },
    '10': {
        name: {
            type: String,
            default: 'no name'
        },
        location: {
            type: Schema.Types.Mixed,
            default: 'no location'
        },
        photo: {
            type: Schema.Types.Mixed,
            default: 'no photo'
        }
    },
    '11': {
        name: {
            type: String,
            default: 'no name'
        },
        location: {
            type: Schema.Types.Mixed,
            default: 'no location'
        },
        photo: {
            type: Schema.Types.Mixed,
            default: 'no photo'
        }
    },
    '12': {
        name: {
            type: String,
            default: 'no name'
        },
        location: {
            type: Schema.Types.Mixed,
            default: 'no location'
        },
        photo: {
            type: Schema.Types.Mixed,
            default: 'no photo'
        }
    },
    '13': {
        name: {
            type: String,
            default: 'no name'
        },
        location: {
            type: Schema.Types.Mixed,
            default: 'no location'
        },
        photo: {
            type: Schema.Types.Mixed,
            default: 'no photo'
        }
    },
    '14': {
        name: {
            type: String,
            default: 'no name'
        },
        location: {
            type: Schema.Types.Mixed,
            default: 'no location'
        },
        photo: {
            type: Schema.Types.Mixed,
            default: 'no photo'
        }
    },
    '15': {
        name: {
            type: String,
            default: 'no name'
        },
        location: {
            type: Schema.Types.Mixed,
            default: 'no location'
        },
        photo: {
            type: Schema.Types.Mixed,
            default: 'no photo'
        }
    },
    '16': {
        name: {
            type: String,
            default: 'no name'
        },
        location: {
            type: Schema.Types.Mixed,
            default: 'no location'
        },
        photo: {
            type: Schema.Types.Mixed,
            default: 'no photo'
        }
    },
    '17': {
        name: {
            type: String,
            default: 'no name'
        },
        location: {
            type: Schema.Types.Mixed,
            default: 'no location'
        },
        photo: {
            type: Schema.Types.Mixed,
            default: 'no photo'
        }
    },
    '18': {
        name: {
            type: String,
            default: 'no name'
        },
        location: {
            type: Schema.Types.Mixed,
            default: 'no location'
        },
        photo: {
            type: Schema.Types.Mixed,
            default: 'no photo'
        }
    },
    '19': {
        name: {
            type: String,
            default: 'no name'
        },
        location: {
            type: Schema.Types.Mixed,
            default: 'no location'
        },
        photo: {
            type: Schema.Types.Mixed,
            default: 'no photo'
        }
    }
})

const Restaurants = mongoose.model('restaurants', RestaurantPlacesSchema)

module.exports = Restaurants;