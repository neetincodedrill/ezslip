const { GraphQLObjectType,GraphQLNonNull,GraphQLString,GraphQLInt} = require('graphql');


const GetType = new GraphQLObjectType({
    name : 'Get_Details',
    description : 'Get all employees with specific usedId',
    fields: () => ({
        firstName : { type: new GraphQLNonNull(GraphQLString)},
        lastName : { type: new GraphQLNonNull(GraphQLString)},
        employeeCode: { type: new GraphQLNonNull(GraphQLInt)},
        designation : { type: new GraphQLNonNull(GraphQLString)},
        salary : { type: new GraphQLNonNull(GraphQLInt)},
    })
})

module.exports = GetType