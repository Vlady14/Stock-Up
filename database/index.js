const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//your local database url
//27017 is the default mongoDB port
const uri = 'mongodb://localhost:27017/stock-up-users'

mongoose.connect(uri).then(
    () => {
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
        console.log('Connected to MongoDB');

    },
    err => {
        /** handle initial connection error */
        console.log('error connecting to Mongo: ')
        console.log(err);

    }
);


module.exports = mongoose.connection