import express from 'express'
import bcrypt from'bcrypt'
import signupModel from '../Models/signupmodel.js';
import validator from 'validator'
import jwt from 'jsonwebtoken'

const userregister=async (req, res) => {
    const { name, password, email } = req.body;
    try {
        //checking if user already exists
        const exists = await signupModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User Already Exists with this email" })
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please Enter Valid Email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please Enter Strong Password - minimum 8 characters" })
        }
        //As user is valid- store into signupmodel


        const salt=await bcrypt.genSalt(10)
        const hashedpassword=await bcrypt.hash(password,salt)


        const newUser = new signupModel({
            name: name,
            email: email,
            password: hashedpassword,
        });


        const user = await newUser.save();
        
        // let id=user._id

        // let token=jwt.sign({id},'zee1234',{expiresIn:'1h'})

        res.json({ success: true, message: 'Successfully registered' })
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }


}

export default userregister;