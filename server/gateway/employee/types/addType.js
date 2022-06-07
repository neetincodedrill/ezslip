const { GraphQLObjectType,GraphQLNonNull,GraphQLString} = require('graphql');


const AddType = new GraphQLObjectType({
    name : 'Employee',
    description : 'Add Employee',
    fields: () => ({
        message : { type: new GraphQLNonNull(GraphQLString)}
    })
})

module.exports = AddType