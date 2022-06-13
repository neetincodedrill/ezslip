import { GraphQLInputObjectType,GraphQLNonNull,GraphQLString,GraphQLID } from 'graphql';
import { GraphQLDate } from 'graphql-scalars';
import { EPFType } from './EPFType';
import { ESIType } from './ESIType';

export const UpdateEmployeeInput = new GraphQLInputObjectType({
   name: 'UpdateEmployeeInput',
   fields: () => ({
    id : { type: new GraphQLNonNull(GraphQLID)},
    firstName:{ type: GraphQLString },
    lastName: { type: GraphQLString },
    employeeCode : { type: GraphQLString },
    designation:{ type: GraphQLString },
    panNumber:{ type: GraphQLString },
    salary: { type: GraphQLString },
    dob : { type : GraphQLDate},
    doj : { type : GraphQLDate},
    epf : { type: new GraphQLNonNull(EPFType)},
    esi : { type: new GraphQLNonNull(ESIType)}
   })
})
