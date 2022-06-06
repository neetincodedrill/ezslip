const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
require('dotenv').config();
const cors = require('cors');

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

//graphql schema
const schema = require('./schema')

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