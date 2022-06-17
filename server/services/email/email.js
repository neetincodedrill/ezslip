import { signUpTemplate } from './email-templates/signUpTemplate';

export const Email = async(email) => {
    const url = 'https://blog.pusher.com/handling-authentication-in-graphql-jwt/'
    const templateData =  signUpTemplate(url);
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
    to:email,// Change to your recipient
    from:process.env.user_email, // Change to your verified sender
    subject:'Verify Your Email Address',
    html: templateData.toString()
    }
    sgMail
    .send(msg)
    .then(() => {
        return { 
            successMessage: `Verification email sent to: ${email}`
        }
    })
    .catch((error) => {
        return {
            successMessage: 'Technical Issue!, Please click on resend for verify your Email.',
        }
  })
}