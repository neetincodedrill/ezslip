const { GraphQLObjectType,GraphQLSchema} = require('graphql');
const { userQuery,userMutation }  = require('./gateway/user/schema');

const query = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        ...userQuery
    })
})

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        ...userMutation
    })
})

const schema = new GraphQLSchema({
    query,
    mutation
})

module.exports = schema;