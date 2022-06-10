import mongoose from 'mongoose';
const OrganizationDetailsSchema = new mongoose.Schema({
    userId :{
        type  :  mongoose.Schema.ObjectId,
        required: true
    },
    basicSalary : {
        type : String,
        required : true
    },
    HRA :{
        type : Number,
        required : true
    },
    CIN :{
        type: String,
        required : true
    },
    EPF : {
        type: String,
        required : true
    },
    ESI : {
        type: String,
        required : true
    }
},{
    timestamps : true
})

export const OrganizationDetails = mongoose.model('OrganizationDetails',OrganizationDetailsSchema)


