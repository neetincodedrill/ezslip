import mongoose from 'mongoose';

exports.connect = () => {
    //connection to database
    mongoose
        .connect(process.env.DB,{
            useNewUrlParser : true,
            useUnifiedTopology : true
        })
        .then(() => {
            console.log('Mongodb database connected')
        })
        .catch((error) => {
            console.log('Mongodb connection failed exit now...')
            console.log(error)
        })
}