import express from 'express'

const addTocart=async(req,res)=>{
    console.log('added to cart');
    //
    ///
    res.json({success:true,message:"added to cart successfully"})
}

export default addTocart