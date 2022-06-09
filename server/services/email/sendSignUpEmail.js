import nodemailer from 'nodemailer';
import { signUpTemplate } from './email-templates/signUpTemplate';

export const sendSignUpEmail = async(email) => {
    const url = 'https://blog.pusher.com/handling-authentication-in-graphql-jwt/'
    const templateData =  signUpTemplate(url);
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
        to:email,
        subject:'Verify Your Email Address',
        html: templateData.toString()
    };

    //step 3  
    const emailSend =  await transporter.sendMail(mailOptions)
    if(!emailSend){
        return {
            successMessage: 'Technical Issue!, Please click on resend for verify your Email.',
        }
    }
    else{
        return { 
            successMessage: `Verification email sent to: ${email}`
        }
    }
}



    