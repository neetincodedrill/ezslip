import { Employee } from "../../../database/model/employee";

export const EmployeeList = async(_,args,context) => {
    if(context.message){
        return{
            message : context.message
        }
    }else if(context.user.error){
        return { message : context.user.message}
    }else{
    try{
        const id = context.user.id
        const employeeList = await Employee.find({userId: id,employeeStatus:true})
        return employeeList   
    }catch(error){
        throw new Error(error);
    }
    }
}