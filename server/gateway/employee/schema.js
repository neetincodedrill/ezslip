const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLInt
} = require('graphql')

const AddType = require('./types/addType');
const UpdateType = require('./types/updateType');
const DeleteType = require('./types/deleteType');
const ListType = require('./types/listType');
const HistoryType = require('./types/historyType')
const SlipSharedType = require('./types/slipSharedType')

const AddEmployee = require('./resolvers/addResolver');
const UpdateEmployee = require('./resolvers/updateResolver')
const DeleteEmployee = require('./resolvers/deleteResolver')
const EmployeeList = require('./resolvers/listResolver')
const EmployeeHistory = require('./resolvers/historyResolver')
const SlipShared = require('./resolvers/slipSharedResolver')

const employeeQuery = {
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

const employeeMutation = {
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

module.exports = { employeeQuery,employeeMutation }