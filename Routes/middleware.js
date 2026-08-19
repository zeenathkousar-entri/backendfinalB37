import express from 'express'
import addTocart from '../Controllers/Cartcontroller.js';
import jwt from 'jsonwebtoken'

const middlewarerouter = express.Router()


const authmiddlewarefunc = async (req, res, next) => {
    const { token } = req.headers;
    console.log(req.headers.token)

    if (!token) {
        res.json({ success: false, message: "Not Authenticate User" })
    }

    try{
    const t_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId=t_decode.id;
    next();
    }
    catch(e){
        console.log(e);
        res.status(400);
        res.json({success:false,message:"Invalid token"})
    }
}



middlewarerouter.post('/addtocart', authmiddlewarefunc, addTocart)


export default middlewarerouter