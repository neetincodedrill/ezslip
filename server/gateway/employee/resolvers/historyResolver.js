import { Employee } from "../../../database/model/employee";

export const EmployeeHistory = async(_,args,context) => {
    if(context.message){
        return{
            message : context.message
        }
    }else if(context.user.error){
        return { message : context.user.message}
    }else{
    const id = context.user.id
    const employeeList = await Employee.find({userId: id,employeeStatus:true})
    return employeeList
    }
}