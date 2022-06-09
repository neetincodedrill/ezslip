import { Employee } from "../../../database/model/employee";

export const AddEmployee = async(_,args,context) => {
    // const userId = context.user;
    const id = "62a19263e0f250f7e5d7a195"

    const employee = new Employee({
    
        firstName : args.firstName,
        lastName : args.lastName,
        employeeCode : args.employeeCode,
        designation : args.designation,
        panNumber : args.panNumber,
        salary : args.salary,
    });

    try{
        const user = await employee.save();
        await Employee.findByIdAndUpdate(
            {_id : user._id},
            {
              $set:{
                  userId : id,
                  employeeStatus : true
              }
            }
            )
        return{
            message : "New Employee created"
        }
    }catch(error){
       throw new Error(error);
    }
}