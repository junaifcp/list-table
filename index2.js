 const express=require('express');
 const session=require('express-session')
 const app=express();
 app.use(session({
     secret:"your secret key",
     resave:true,
     saveUninitialized:true
 }))
 app.get('/',(req,res)=>{
    req.session.name="junaif"
    return res.send("session set");
 })
 app.get('/session',(req,res)=>{
     var name=req.session.name;
     return res.send(name)
 })
 app.get('/destroy',(req,res)=>{
     req.session.destroy((error)=>{
         console.log("seession destrtoid")
     })
     res.end()
 })


 app.listen(3000,()=>{console.log("listening to port 3000")})