import { Employee } from "../../../database/model/employee";

export const AddEmployee = async(_,args,context) => {
    const id = context.user.id
    if(context.message){
        return{
            message : context.message
        }
    }else if(context.user.error){
        return { message : context.user.message}
    }else{
        try{
            const employee = new Employee({
                userId : id,
                firstName : args.firstName,
                lastName : args.lastName,
                employeeCode : args.employeeCode,
                designation : args.designation,
                panNumber : args.panNumber,
                salary : args.salary,
                employeeStatus : true
            });
            await employee.save();
            return{
                message : "New Employee created"
            }
        }catch(error){
        throw new Error(error);
        }
    }
}