const { GraphQLObjectType,GraphQLNonNull,GraphQLString} = require('graphql');

const DeleteType = new GraphQLObjectType({
    name : 'employee',
    description : 'Delete employee',
    fields: () => ({
        message : { type: new GraphQLNonNull(GraphQLString)}
    })
})

module.exports = DeleteType