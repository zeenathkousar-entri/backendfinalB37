import express from 'express'
const app=express()
import cors from 'cors';
import 'dotenv/config'


app.use(cors());

app.use(cors({origin: '*'}));


import connectDB from './db.js';

import signuprouter from './Routes/signuproutes.js';
import loginroute from './Routes/loginroutes.js';
import middlewarerouter from './Routes/middleware.js';

const port=process.env.PORT

// comment
app.use(express.json());
app.use(express.urlencoded({extended:true}))

connectDB()

app.get('/',(req,res)=>{
    res.send('working api')
})


app.use('/signup',signuprouter)
app.use('/',loginroute)
app.use('/',middlewarerouter)

app.listen(port,()=>{
    console.log('server running')
})

