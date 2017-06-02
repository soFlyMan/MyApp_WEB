const mongoose = require('mongoose')
const config = require('../config/mongo-config.js')

const db = mongoose.connect("mongodb://" + config.HOST  + ":" + config.PORT + "/" + config.NAME )


console.log('You have connected mongod://' + config.HOST  + ":" + config.PORT + "/" + config.NAME)

mongoose.Promise = global.Promise

module.exports = db
