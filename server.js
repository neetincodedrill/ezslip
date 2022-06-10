import express from 'express';
require('dotenv').config();
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import { tokenValidation } from './server/services/middleware/tokenValidation'
import { router } from './server/services/rest_api/route'
import { schema } from "./schema"


//define the express
const app = express();

//middleware
app.use(express.json({limit: '50mb'}));
app.use(cors());

//connect to database
require("./server/database").connect();

//server port 
const { PORT } = process.env;
const port = process.env.port || PORT;

//create an instance of apollo-server-request
const server = new ApolloServer({
    schema,
    context: async({ req }) => { 
        if(!req.headers.authorization) return { message : 'User must be logged In!'}
            const token = req.headers.authorization;
            const user =  await tokenValidation(token);	
            return { user };     
      },
})

//rest-api
app.use('/update',router)

server.start().then(res => {
    //apply the apollo middleware and set its path to /api
    server.applyMiddleware({app,path: '/ezslip'})
    app.listen(port, () => 
    console.log(`Server is running at http://localhost:${port}/ezslip`
    ))
})