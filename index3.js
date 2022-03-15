const express=require('express');
const app=express();
const cookies=require('cookie-parser');
app.use(cookies());
let users={
    name:"junaif",
    age:28
}

app.get('/',(req,res)=>{
    res.send("cookie home router")
});
//create a simpl;e variable and store that data inbside cookies
app.get('/setuser',(req,res)=>{
    res.cookie("userData",users)
    res.send("user data added")
})
app.get('/getuser',(req,res)=>{
    res.send(req.cookies);
    
})
app.get('/logout',(req,res)=>{
    res.clearCookie('userData');
    res.send('user logout suucessfully')
})





app.listen(3000,()=>{console.log("cookies server is running")})