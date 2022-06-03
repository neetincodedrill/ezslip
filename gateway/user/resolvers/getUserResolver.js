const model = require("../../db/model");

const GetUser = async(_,args) => {
    const user = await model.User.findById(args.id)
    return {
        name : user.name,
        organization_name : user.organization_name,
        email : user.email,
        contact_number : user.contact_number,
    }
}

module.exports = GetUser