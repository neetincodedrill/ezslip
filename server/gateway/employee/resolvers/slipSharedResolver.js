import { model } from "../../../database/model"

export const SlipShared = async(_,args,context) => {
    const todayDate = new Date();
    const dd = todayDate.getDate();
    const mm = todayDate.getMonth()+1; 
    const yyyy = todayDate.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    }
    const date = dd+'/'+mm+'/'+yyyy;
    await model.Employee.findByIdAndUpdate(
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