import { Employee } from "../../../database/model/employee";

export const UpdateEmployee = async(_,args,context) => {
    await Employee.findByIdAndUpdate(
        {_id: args.id },
        {
          $set:args
        }
    );
    return{
        message : 'Employee Details Updated'
    }
}