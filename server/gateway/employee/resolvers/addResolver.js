const model = require("../../../database/model");
const userEmployee = model.Employee;

const Add = async(_,args,context) => {
    const userId = context.user;

    const employee = new userEmployee({
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

module.exports = Add