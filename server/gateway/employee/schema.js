import { GraphQLNonNull,GraphQLID,GraphQLList } from 'graphql';

import { AddType } from './types/AddType';
import { UpdateType } from './types/UpdateType';
import { DeleteType } from './types/DeleteType';
import { ListType } from './types/ListType';
import  { HistoryType }  from './types/HistoryType';
import { SlipSharedType } from './types/SlipSharedType';
import { AddEmployeeInput } from './types/AddEmployeeInput';
import { UpdateEmployeeInput } from './types/UpdateEmployeeInput'

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
        args: {
            input: {
              type: new GraphQLNonNull(AddEmployeeInput),
            },
          },
        resolve : AddEmployee
    },
    updateEmployee : {
        type: UpdateType,
        description: "User employee updated",
        args : {
            input: {
                type: new GraphQLNonNull(UpdateEmployeeInput),
              },
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