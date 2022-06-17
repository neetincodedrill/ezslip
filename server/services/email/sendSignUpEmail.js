import nodemailer from 'nodemailer';
const nodemailerSendgrid = require('nodemailer-sendgrid');
import { signUpTemplate } from './email-templates/signUpTemplate';

export const sendSignUpEmail = async(email) => {
    const url = 'https://blog.pusher.com/handling-authentication-in-graphql-jwt/'
    const templateData =  signUpTemplate(url);
        //step 1

    const transporter = nodemailer.createTransport(
        nodemailerSendgrid({
            apiKey: process.env.SENDGRID_API_KEY
        })
    );

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



    