const contactEmail  = require('../../../services/email/contactEmail')

const Contact = async(_,args) => { 
    const user = {
    name : args.name,
    organization_name : args.organization_name,
    email : args.email,
    contact_number : args.contact_number,
    details : args.details
    }
    const email = await contactEmail(user)
    return email
}

module.exports = Contact