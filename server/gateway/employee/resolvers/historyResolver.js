import { model } from "../../../database/model"

export const EmployeeHistory = async(_,args,context) => {
    const employeeId = args.id;
    const employeeList = await model.Employee({userId: employeeId,employeeStatus:true})
    return employeeList
}