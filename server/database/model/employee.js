const mongoose = require('mongoose');
const EmployeeSchema = new mongoose.Schema({
    userId : {
        type : String,
        required: true
    },
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required: true
    },
    employeeCode : { 
        type: String
    },
    designation : { 
        type :String
    },
    panNumber : { 
        type :String
    },
    salary : { 
        type : String
    },
    employeeStatus : {
       type :Boolean,
       default: false
    },
    slipShared: {
        type : String,
    }
},{
    timestamps : true
})

const Employee = mongoose.model('Employee',EmployeeSchema)

module.exports = Employee