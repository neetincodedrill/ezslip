import mongoose from 'mongoose'; 

const EmployeeSchema = new mongoose.Schema({
    userId : { 
        type  :  mongoose.Schema.ObjectId,
    },
    firstName : { 
        type : String 
    },
    lastName : { 
        type : String 
    },
    employeeCode : { 
        type: String 
    },
    designation : { 
        type :String 
    },
    PAN : { 
        type :String 
    },
    salary : { 
        type : String 
    },
    DOB : { 
        type : Date 
    },
    DOJ : { 
        type : Date 
    },
    EPF : { 
        isEnabled : { 
            type : Boolean 
        },
        number : { 
            type : String 
        }
    },
    ESI :{ 
        isEnabled : { 
            type : Boolean 
        },
        number : { 
            type : String
        }
    },
    employeeStatus : {
       type :Boolean,
       default: false
    },
    slipShared: { type : String }
},{
    timestamps : true
})

export const Employee = mongoose.model('Employee',EmployeeSchema)