import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    organizationName :{
        type:String,
        required: true
    },
    email: {
        type:String,
        required:true,
    },
    contactNumber: {
        type:String,
        required: true,
    },
    password: {
        type:String,
        minlength: 8,
    },
    organizationImage:{
        type:String,
    },
    organisationLegalName: {
        type: String,
    },
    organizationType: {
        type: String,
   },
    address: {
        type: String,
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isActivated: {
        type:Boolean,
        default: false
    },
    userType: {
        type:String,
        enum: ['user','admin'],
        default: 'user'
    },
    isDeleted: {
        type:Boolean,
        default: false
    }
},{
    timestamps: true
})

export const User = mongoose.model('User',UserSchema)