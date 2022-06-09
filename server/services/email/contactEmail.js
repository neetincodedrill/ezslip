import  nodemailer from 'nodemailer';
import  { contactTemplate } from './email-templates/contactTemplate';

export const contactEmail = async(user) => {
    const name = user.name;
    const organization_name = user.organization_name;
    const email = user.email;
    const contact_number = user.contact_number;
    const details = user.details;
    
    const templateData = await contactTemplate(name,organization_name,email,contact_number,details);
    
    //step 1
    var transporter= nodemailer.createTransport({
        host: 'smtppro.zoho.in',
        port: '465',
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.user_email,
            pass: process.env.user_password
        },
    });

    //step 2
    var mailOptions={
        from:process.env.user_email,
        to:process.env.admin_email,
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

