const nodemailer = require('nodemailer')
const { user_email, user_password } = process.env;
const signUpTemplate  = require('./email-templates/signUpTemplate');
const url = 'https://blog.pusher.com/handling-authentication-in-graphql-jwt/'
const templateData = signUpTemplate(url);


const sendSignUpEmail = async(email) => {
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
        to:email,
        subject:'Verify Your Email Address',
        html: templateData.toString()
    };

    //step 3  
     transporter.sendMail(mailOptions,function(error,info)
    {
        if(error){
            return{
                successMessage: 'Technical Issue!, Please click on resend for verify your Email.',
            }
        }
        else{
            return{
                successMessage: `Verification email sent to: ${email}`
            }
        }
    });
}

module.exports  = sendSignUpEmail


    