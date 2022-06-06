const model = require("../../../database/model");

const GetUser = async(_,args) => {
    const user = await model.User.findById(args.id)
    return {
        name : user.name,
        organization_name : user.organizationName,
        email : user.email,
        contact_number : user.contactNumber,
    }
}

module.exports = GetUser