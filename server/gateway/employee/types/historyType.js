const { GraphQLObjectType,GraphQLNonNull,GraphQLString,GraphQLInt} = require('graphql')

const History = new GraphQLObjectType({
    name : 'Employee_History_Details',
    description : 'History details of employee',
    fields: () => ({
        firstName : { type: new GraphQLNonNull(GraphQLString)},
        lastName : { type: new GraphQLNonNull(GraphQLString)},
        employeeCode: { type: new GraphQLNonNull(GraphQLInt)},
        slipShared : { type: new GraphQLNonNull(GraphQLString)},
        lastEdition : { type: new GraphQLNonNull(GraphQLString)}
    })
})

module.exports =  History