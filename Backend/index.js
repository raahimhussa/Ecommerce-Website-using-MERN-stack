const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt=require('jsonwebtoken');
const multer= require('multer');
const path=require('path');
const cors=require('cors');
const { error } = require('console');

app.use(express.json());
app.use(cors());

// data base connection with mongodb
mongoose.connect("mongodb+srv://raahimhussain1420:gulistan@cluster0.3npvqmi.mongodb.net/e-commerce")

// api creation

app.get("/",(req,res)=>
{
    res.send("Express App is running")
})
// image storage engine
const storage = multer.diskStorage(
    {
    
        destination: './upload/images',
        filename: (req, file, cb) => {
            return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
    })

const upload = multer({storage:storage})
app.use ('./images',express.static('upload/images'))
//Creating upload end points for images
app.post('/upload',upload.single('product'),(req,res)=>{
    res.json({
        success :1,
        image_url :`http://localhost:${port}/images/${req.file.filename}`
    })


})

// scheme for creating product XDDD

const Product = mongoose.model("Product",{
    id:{
        type:Number,
        required:true,

    },
    
    name:
    {
        type:String,
        required:true,

    },
    
})

app.listen(port,(error)=>{
    if(!error)
        {
            console.log("server running on port "+ port)
        }
    else{
        console.log("error :" +error)
    }
})
