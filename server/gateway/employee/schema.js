import {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLInt
} from 'graphql';

import { AddType } from './types/addType';
import { UpdateType } from './types/updateType';
import { DeleteType } from './types/deleteType';
import { ListType } from './types/listType';
import  { HistoryType }  from './types/historyType';
import { SlipSharedType } from './types/slipSharedType';

import { AddEmployee } from './resolvers/addResolver';
import { UpdateEmployee } from './resolvers/updateResolver';
import { DeleteEmployee } from './resolvers/deleteResolver';
import { EmployeeList } from './resolvers/listResolver';
import { EmployeeHistory } from './resolvers/historyResolver';
import { SlipShared } from './resolvers/slipSharedResolver';

export const employeeQuery = {
    employeeList : {
        type : new GraphQLList(ListType),
        args : {
            id : { type: new GraphQLNonNull(GraphQLID)}
        },
        resolve : EmployeeList
    },
    employeeHistory : {
        type : new GraphQLList(HistoryType),
        args : {
            id : { type: new GraphQLNonNull(GraphQLID)}
        },
        resolve : EmployeeHistory
    }
}

export const employeeMutation = {
    addEmployee : {
        type: AddType,
        description: "New user employee created",
        args : {
            userId: { type: new GraphQLNonNull(GraphQLID)},
            firstName: { type: new GraphQLNonNull(GraphQLString)},
            lastName: { type: new GraphQLNonNull(GraphQLString)},
            employeeCode : { type: new GraphQLNonNull(GraphQLInt)},
            designation: { type:new GraphQLNonNull(GraphQLString)},
            panNumber: { type: new GraphQLNonNull(GraphQLString)},
            salary: { type: new GraphQLNonNull(GraphQLInt)},
        },
        resolve : AddEmployee
    },
    updateEmployee : {
        type: UpdateType,
        description: "User employee updated",
        args : {
            userId: { type: new GraphQLNonNull(GraphQLID)},
            firstName:{ type: GraphQLString },
            lastName: { type: GraphQLString },
            employeeCode : { type: GraphQLInt },
            designation:{ type: GraphQLString },
            panNumber:{ type: GraphQLString },
            salary: { type: GraphQLInt },
        },
        resolve : UpdateEmployee
    },
    deleteEmployee : {
        type: DeleteType,
        description: "User employee deleted",
        args : {
            userId: { type: new GraphQLNonNull(GraphQLID)},
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