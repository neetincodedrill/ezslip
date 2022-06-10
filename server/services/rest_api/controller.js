
import { User } from "../../database/model/user";
import { OrganizationDetails } from '../../database/model/organizationDetails'
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

// storing file in upload folder and changing path name
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./server/public/uploads");
    },
    filename: function (req, file, cb) {
      cb(null, uuidv4() + '-' + file.originalname);
    },
  });
  
  //multer to upload file in uploads folder
  const maxSize = 4 * 1024 * 1024; //for 4 MB
  const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
  limits: { fileSize: maxSize },
  }).single("file");

  
export const authController = async(req,res) => {
    upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(400).send("File too large should be less than 4 MB");
        }else if (err) {
          return res
              .status(400)
              .send("Only .png, .jpg and .jpeg format filetype  allowed!");
        }else{
          // console.log(req.user)
          const id = req.user._id;
          const user = await User.findById(id)
          if(!user) return { message :'User does not exits!'}
          try{
            await User.findByIdAndUpdate(id,{
              $set : {
                organizationImage : req.file.path,
                organizationLegalName : req.body.organizationLegalName,
                organizationType : req.body.organizationType,
                address : req.body.address
              }
            })
            const managment = new OrganizationDetails({
              userId : id,
              basicSalary : req.body.basicSalary,
              HRA : req.body.HRA,
              CIN : req.body.CIN,
              EPF : req.body.EPF,
              ESI : req.body.ESI,
            })
            await managment.save();
            return  res.status(201).json('User collection updated')
          }catch(error){
            console.log(error);
            return  res.status(400).json('Error occured')
          }}    
        })
}
