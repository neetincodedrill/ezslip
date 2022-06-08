import { GraphQLObjectType,GraphQLNonNull,GraphQLString,GraphQLInt} from 'graphql';

export const ListType = new GraphQLObjectType({
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

