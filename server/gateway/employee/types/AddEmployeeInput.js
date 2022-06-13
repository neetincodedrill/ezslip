import { GraphQLInputObjectType,GraphQLNonNull,GraphQLString } from 'graphql';
import { GraphQLDate } from 'graphql-scalars';
import { EPFType } from './EPFType';
import { ESIType } from './ESIType';

export const AddEmployeeInput = new GraphQLInputObjectType({
   name: 'AddEmployeeInput',
   fields: () => ({
    firstName: { type: new GraphQLNonNull(GraphQLString)},
    lastName: { type: new GraphQLNonNull(GraphQLString)},
    employeeCode : { type: new GraphQLNonNull(GraphQLString)},
    designation: { type:new GraphQLNonNull(GraphQLString)},
    panNumber: { type: new GraphQLNonNull(GraphQLString)},
    salary: { type: new GraphQLNonNull(GraphQLString)},
    dob : { type : new GraphQLNonNull(GraphQLDate)},
    doj : { type : new GraphQLNonNull(GraphQLDate)},
    epf : { type: new GraphQLNonNull(EPFType)},
    esi : { type: new GraphQLNonNull(ESIType)}
   })
})
