import  { GraphQLObjectType,GraphQLSchema} from 'graphql';
import { userQuery,userMutation } from './server/gateway/user/schema';
import  { contactQuery,contactMutation } from './server/gateway/contact/schema'
import { employeeQuery,employeeMutation } from './server/gateway/employee/schema'


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

export const schema = new GraphQLSchema({
    query,
    mutation
})

