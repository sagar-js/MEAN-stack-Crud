const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/',(err)=>{
    if(!err){console.log('MongoDB connection successed');}
    else{
        console.log('Error in DB connection ' + err);
    }
});
module.exports = mongoose;