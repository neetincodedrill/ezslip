import { Employee } from "../../../database/model/employee";

export const UpdateEmployee = async(_,args,context) => {
    if(context.message){
        return{
            message : context.message
        }
    }else if(context.user.error){
        return { message : context.user.message}
    }else{
    try{
        await Employee.findByIdAndUpdate(
            {_id: args.id },
            {
              $set:args
            }
        );
        return{
            message : 'Employee Details Updated'
        }
    }catch(error){
        throw new Error(error);
    }
   }
}