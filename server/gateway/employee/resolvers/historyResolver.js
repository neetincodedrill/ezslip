import { Employee } from "../../../database/model/employee";

export const EmployeeHistory = async(_,args,context) => {

    const id = args.id;
    const employeeList = await Employee.find({userId: id,employeeStatus:true})
    return employeeList
    
}