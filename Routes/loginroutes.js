import express from 'express'
import validator from 'validator'
import bcrypt from 'bcrypt'
import loginModel from '../Models/loginmodel.js'
import signupModel from '../Models/signupmodel.js'
import loginuser from '../Controllers/logincontroller.js'

const loginroute = express.Router()


loginroute.post('/login', loginuser)


export default loginroute