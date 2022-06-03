const signUpTemplate = (url)=>{
    data = '<!DOCTYPE html><html lang="en"> <head> <meta charset="UTF-8"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <meta name="viewport" content="width=device-width, initial-scale=1.0"/> <title>Document</title> <style>.header{padding: 20px 0; width: 601px; display: flex; background-color: white; border: 1px solid rgb(236, 236, 236); align-items: center; box-shadow: 0px 2px 2px lightgrey;}.header .logo{color: #47a296; width: 112px; margin-left: 49px; font-size: 34px; font-weight: 400px;}.header .contact button{background-color: #47a296; color: white; border-radius: 5px; padding: 12px 0; width: 140px; border: none; margin-left: 245px; font-size: 16px;}.main{width: 600px; text-align: center; color: #47a296; position: relative; justify-content: center; display: flex; border: 1px solid rgb(236, 236, 236);}.main .content{position: absolute; top: 0px; text-align: center;}.main .content h2{margin-top: 40px; font-style: normal; font-weight: 500; font-size: 25px;}.main .content h1{font-style: normal; font-weight: 500; font-size: 26px; color: black;}.main .content button{margin-top: 50px; background-color: #47a296; color: white; padding: 15px 0; width: 170px; font-size: 20px; border-radius: 5px; border: none;}.main .content p{font-size: 18px; padding: 10px 95px; color: black; margin: 40px 0px;}.footer{padding: 15px 0; width: 601px;text-align: center;}.footer .footer-logo{color: #47a296; font-size: 20px;}body{margin: 0;display: flex;flex-direction: column;justify-content: center;align-items: center;min-height: 100vh;}</style> </head> <body> <div class="header"> <div class="logo">ezSlips</div><div class="contact"><button>Contact Us</button></div></div><div class="main"> <img src="Frame.png" alt="frame" width="100%"/> <div class="content"> <h2>Get Started with ezSlips</h2> <h1>Click on the button below to confirm your email</h1> <a href="'+url+'">Click here</a> <p> By registering you agree to our terms and conditions and privacy policy </p></div></div><div class="footer"> <span class="footer-logo">ezSlips</span> All Rights Reserved. </div></body></html>';
    return data;
};
module.exports =  signUpTemplate;