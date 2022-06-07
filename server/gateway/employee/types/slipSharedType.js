const { GraphQLObjectType,GraphQLNonNull,GraphQLString } = require('graphql');

const SlipShared = new GraphQLObjectType({
    name : 'Slip_Shared',
    description : 'Employee slip shared',
    fields: () => ({
        message : { type: new GraphQLNonNull(GraphQLString)}
    })
})

module.exports = SlipShared