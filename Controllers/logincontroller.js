import express from 'express'
import bcrypt from'bcrypt'
import signupModel from '../Models/signupmodel.js';
import loginModel from '../Models/loginmodel.js';
import jwt from 'jsonwebtoken';

const loginuser=async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await signupModel.find({ email });
        console.log(user);
        if (user.length == 0) {
            console.log('user doesnt exits with this email');
            res.json({ success: false, message: "user Doesnt Exists with this email, please  register first then u can login" });
        }
        const isMatch = await bcrypt.compare(password, user[0].password);

        if (!isMatch) {
            return res.json({ success: false, message: "Invalid Credentials" })
        }


        let id=user._id
        let token=jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1h'})
        

        res.json({ success: true, message: 'successfully login' ,token})

    }

    catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}



export default loginuser