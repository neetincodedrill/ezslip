import { model } from "../../../database/model";

export const UpdateEmployee = async(_,args,context) => {
    await model.Employee.findByIdAndUpdate(
        {_id: args.id },
        {
          $set:args
        }
    );
    return{
        message : 'Employee Details Updated'
    }
}