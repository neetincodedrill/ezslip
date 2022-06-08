import { model } from "../../../database/model";
const Employee = model.Employee;

export const AddEmployee = async(_,args,context) => {
    const userId = context.user;

    const employee = new Employee({
        userId : userId,
        firstName : args.firstName,
        lastName : args.lastName,
        employeeCode : args.employeeCode,
        designation : args.designation,
        panNumber : args.panNumber,
        salary : args.salary,
    });

    try{
        const employeeCodeExist = await model.User.findOne({ employeeCode: args.employeeCode });
        if(employeeCodeExist) return { message : "Employee With employee Id already exits! "}
        const user = await employee.save();
        await userEmployee.findByIdAndUpdate(
            {_id : user._id},
            {
              $set:{
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