import { Employee } from "../../../database/model/employee";

export const DeleteEmployee = async(_,args,context) => {
    if(context.message){
        return{
            message : context.message
        }
    }else if(context.user.error){
        return { message : context.user.message}
    }else{
        const id = args.id
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
}