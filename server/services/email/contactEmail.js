const nodemailer = require('nodemailer')
const { user_email, user_password } = process.env;
const contactTemplate  = require('./email-templates/contactTemplate');
const { admin_email } = process.env;

const contactEmail = async(user) => {
    const name = user.name;
    const organization_name = user.organization_name;
    const email = user.email;
    const contact_number = user.contact_number;
    const details = user.details;
    
    const templateData = await contactTemplate(name,organization_name,email,contact_number,details);
    
    //step 1
    var transporter= nodemailer.createTransport(
        {
        service:'gmail',
        auth:
        {
        user: user_email,
        pass: user_password
        }
    });

    //step 2
    var mailOptions={
        from:user_email,
        to:admin_email,
        subject:'Contact information',
        html: templateData.toString()
    };

    //step 3  
    const emailSend =  await transporter.sendMail(mailOptions)
    if(!emailSend){
        return {
            message : 'Technical Issue!, Please click on resend for verify your Email'
        }
    }
    else{
        return { 
            message : 'Email Send to admin'
        }
    }
}

module.exports  = contactEmail
