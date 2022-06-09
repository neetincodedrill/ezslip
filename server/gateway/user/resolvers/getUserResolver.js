import { User } from "../../../database/model/user";

export const GetUser = async(_,args) => {
    const user = await User.findById(args.id)
    return {
        name : user.name,
        organization_name : user.organizationName,
        email : user.email,
        contact_number : user.contactNumber,
    }
}