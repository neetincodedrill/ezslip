import { Employee } from "../../../database/model/employee";

export const SlipShared = async(_,args,context) => {
    const todayDate = new Date();
    var dd = todayDate.getDate();
    var mm = todayDate.getMonth()+1;  
    var yyyy = todayDate.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    }
    const date = dd+'/'+mm+'/'+yyyy;
    console.log(date)
    await Employee.findByIdAndUpdate(
        { _id  : args.id },
        {
            $set : {
                slipShared : date
            }
        }
    )
    return {
        message :  'Employee slip shared' 
    }
}