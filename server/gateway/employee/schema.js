import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList
} from 'graphql';
import { GraphQLDate } from 'graphql-scalars';

import { AddType } from './types/addType';
import { UpdateType } from './types/updateType';
import { DeleteType } from './types/deleteType';
import { ListType } from './types/listType';
import  { HistoryType }  from './types/historyType';
import { SlipSharedType } from './types/slipSharedType';
import { EPFType } from './types/epfType';
import { ESIType } from './types/esiType';

import { AddEmployee } from './resolvers/addResolver';
import { UpdateEmployee } from './resolvers/updateResolver';
import { DeleteEmployee } from './resolvers/deleteResolver';
import { EmployeeList } from './resolvers/listResolver';
import { EmployeeHistory } from './resolvers/historyResolver';
import { SlipShared } from './resolvers/slipSharedResolver';

export const employeeQuery = {
    employeeList : {
        type : new GraphQLList(ListType),
        resolve : EmployeeList
    },
    employeeHistory : {
        type : new GraphQLList(HistoryType),
        resolve : EmployeeHistory
    }
}

export const employeeMutation = {
    addEmployee : {
        type: AddType,
        description: "New user employee created",
        args : {
            firstName: { type: new GraphQLNonNull(GraphQLString)},
            lastName: { type: new GraphQLNonNull(GraphQLString)},
            employeeCode : { type: new GraphQLNonNull(GraphQLString)},
            designation: { type:new GraphQLNonNull(GraphQLString)},
            panNumber: { type: new GraphQLNonNull(GraphQLString)},
            salary: { type: new GraphQLNonNull(GraphQLString)},
            dob : { type : new GraphQLNonNull(GraphQLDate)},
            doj : { type : new GraphQLNonNull(GraphQLDate)},
            epf: {
                type: new GraphQLNonNull(GraphQLDate),
              },
        },
        resolve : AddEmployee
    },
    updateEmployee : {
        type: UpdateType,
        description: "User employee updated",
        args : {
            id : { type: new GraphQLNonNull(GraphQLID)},
            firstName:{ type: GraphQLString },
            lastName: { type: GraphQLString },
            employeeCode : { type: GraphQLString },
            designation:{ type: GraphQLString },
            panNumber:{ type: GraphQLString },
            salary: { type: GraphQLString },
            dob : { type : GraphQLDate},
            doj : { type : GraphQLDate}
        },
        resolve : UpdateEmployee
    },
    deleteEmployee : {
        type: DeleteType,
        description: "User employee deleted",
        args : {
            id: { type: new GraphQLNonNull(GraphQLID)},
        },
        resolve : DeleteEmployee
    },
    employeeSlipShared : {
        type : SlipSharedType,
        description: "Employee Slip Shared",
        args : {
            id : { type: new GraphQLNonNull(GraphQLID)}
        },
        resolve : SlipShared
    }
}