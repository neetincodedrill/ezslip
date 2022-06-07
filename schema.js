const { GraphQLObjectType,GraphQLSchema} = require('graphql');
const { userQuery,userMutation }  = require('./server/gateway/user/schema');
const { contactQuery,contactMutation } = require('./server/gateway/contact/schema')
const { employeeQuery,employeeMutation } = require('./server/gateway/employee/schema')
const tokenValidation = require('./server/services/middleware/tokenValidation');

const query = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        ...userQuery,
        ...contactQuery,
        ...employeeQuery
    })
})

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        ...userMutation,
        ...contactMutation,
        ...employeeMutation
    })
})

const context = async({req}) => {
    // verify user identify
    if(req.headers && req.headers.authorization){
        const auth = req.headers.authorization;
        const parts = auth.split(" ");
        const bearer = parts[0];
        const token = parts[1];

        if(bearer == 'Bearer'){
            const user = await tokenValidation(token);
            if(user.error){
                throw Error(user.msg)
            }else return{ user }
        }else{
            throw Error('Authentication must use Bearer')
        }
    } else{
        throw Error("User must be authenticated")
    }
}

const schema = new GraphQLSchema({
    query,
    mutation,
    context
})

module.exports = schema;