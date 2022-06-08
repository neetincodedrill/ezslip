import express from 'express';
require('dotenv').config();
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import { context } from './server/services/middleware/context'
import { image_upload } from './server/services/rest_api/imageController'
//graphql schema
import { schema } from "./schema"

//define the express
const app = express();

//middleware
app.use(express.json())
app.use(cors());

//connect to database
require("./server/database").connect();

//server port 
const { PORT } = process.env;
const port = process.env.port || PORT;

//image upload rest_api
app.post('/imagePost',context,image_upload)



//create an instance of apollo-server-request
const server = new ApolloServer({
    schema
})

server.start().then(res => {
    //apply the apollo middleware and set its path to /api
    server.applyMiddleware({app,path: '/ezslip'})
    app.listen(port, () => 
    console.log(`Server is running at http://localhost:${port}/ezslip`
    ))
})