import express from 'express'
import validator from 'validator'
import bcrypt from 'bcrypt'
import signupModel from '../Models/signupmodel.js'
import userregister from '../Controllers/signupcontroller.js'

const signuprouter = express.Router()

signuprouter.post('/register', userregister)


export default signuprouter