import { model } from "../../../database/model"

export const DeleteEmployee = async(_,args,context) => {
    const id = args.id;
    await model.Employee.findByIdAndUpdate(
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