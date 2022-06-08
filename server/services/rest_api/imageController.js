import { User, SalaryComponent } from "../../database/model";
import multer from 'multer';
import uuid from 'uuid-v4';

// storing file in upload folder and changing path name
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, "../../public/uploads/images");
    },
    filename: function (req, file, cb) {
    cb(null, uuid() + '-' + file.originalname);
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

//new user
export const image_upload = async(req,res) => {
    upload(req, res,  async(err) =>  {
        if (err instanceof multer.MulterError) {
            return res.status(400).json("File too large should be less than 4 MB");
        }else if (err) {
            return res
              .status(400)
              .json("Only .png, .jpg and .jpeg format filetype  allowed!");
        }else {
            const salaryComponent = new SalaryComponent({
                userId : userdId,
                DA : req.body.da,
                CA : req.body.ca,
                HRA : req.body.hra,
                specialAllowance : req.body.specialAllowance,
                EPF : req.body.EPF,
            })
            try{
                await User.findByIdAndUpdate(id,{
                    $set: {
                        organizationImage: req.file.path,
                        organisationLegalName : req.body.organisationLegalName,
                        organizationType : req.body.organizationType,
                        address : req.body.address,
                    }
                })
                await salaryComponent.save()
                res.status(201).json('User Account updated');
            }catch (err) {
                return res.status(500).send('You can only update your account')
            }
        }
    })
}

