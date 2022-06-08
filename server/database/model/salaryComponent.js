import mongoose from 'mongoose';
const SalaryComponentSchema = new mongoose.Schema({
    userId :{
        type  : String,
        required: true
    },
    DA :{
        type : Number,
        required : true
    },
    CA :{ 
        type : Number,
        required : true
    },
    HRA :{
        type : Number,
        required : true
    },
    specialAllowance :{
        type : Number,
        required : true
    },
    EPF :{
        type: Number,
        required : true
    }
},{
    timestamps : true
})

export const Salary = mongoose.model('SalaryComponent',SalaryComponentSchema)


