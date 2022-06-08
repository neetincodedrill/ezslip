import { GraphQLObjectType,GraphQLString,GraphQLNonNull} from 'graphql';

export const UserVerificationType = new GraphQLObjectType({
    name: "Verification",
    description: "User Verification",
    fields: () => ({
        message: { type: new GraphQLNonNull(GraphQLString)}
    })
})

