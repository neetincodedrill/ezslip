const { GraphQLObjectType,GraphQLNonNull,GraphQLString} = require('graphql');

const UpdateType = new GraphQLObjectType({
    name : 'update_employee',
    description : 'Update employee',
    fields: () => ({
        message : { type: new GraphQLNonNull(GraphQLString)}
    })
})

module.exports = UpdateType