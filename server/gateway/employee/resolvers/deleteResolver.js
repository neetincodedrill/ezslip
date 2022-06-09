import { Employee } from "../../../database/model/employee";

export const DeleteEmployee = async(_,args,context) => {
    const id = args.id;
    await Employee.findByIdAndUpdate(
        {_id: id },
        {
          $set:{
              employeeStatus : false
          }
        }
    );
    return{
        message : 'Employee deleted'
    }
}