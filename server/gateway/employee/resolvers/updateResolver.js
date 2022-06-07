const model = require("../../../database/model");

const Update = async(_,args,context) => {
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

module.exports = Update