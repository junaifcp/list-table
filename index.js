const express=require("express");
const path=require("path");
const app=express();



app.set("views",path.join(__dirname,"views"))
app.set("view engine","hbs")
app.use(express.urlencoded({
    extended:true
}))
app.get('/',(req,res)=>{
    let products=[
        {
          name:"iphone 4s",
          category:"Mobile",
          description:"Apple iPhone 4S mobile was launched in October 2011. The phone comes with a 3.50-inch touchscreen display with a resolution of 640x960 pixels at a pixel density of 326 pixels per inch (pp)",
          image:"https://imgs.search.brave.com/caIjiCABBBqYDwQ10Ess4tqrIvflzsqqH_Y0jIaU7q0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/aW1vcmUuY29tL3Np/dGVzL2ltb3JlLmNv/bS9maWxlcy9zdHls/ZXMveGxhcmdlX3dt/X2Jsdy9wdWJsaWMv/ZmllbGQvaW1hZ2Uv/MjAxNS8wOC9oaXN0/b3J5LWlwaG9uZS00/LWhlcm8uanBnP2l0/b2s9RU9qT2FBM2k"
        },
        {
          name:"iphone 11 pro",
          category:"Mobile",
          description:"Apple iPhone 4S mobile was launched in October 2011. The phone comes with a 3.50-inch touchscreen display with a resolution of 640x960 pixels at a pixel density of 326 pixels per inch (pp)",
          image:"https://imgs.search.brave.com/yQy9SjIcQmguVi7ynJKmTR8PhC2nrX2q9ujXjDWF6is/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pY2Ru/Mi5kaWdpdGFsdHJl/bmRzLmNvbS9pbWFn/ZS9kaWdpdGFsdHJl/bmRzL2FwcGxlLWlw/aG9uZS0xMS1wcm8t/bWF4LWhhbmRzLW9u/LWpjLWZyb250LW9m/LXBob25lLWFwcHMt/djIuanBn"
        },
        {
          name:"iphone 5s",
          category:"Mobile",
          description:"Apple iPhone 4S mobile was launched in October 2011. The phone comes with a 3.50-inch touchscreen display with a resolution of 640x960 pixels at a pixel density of 326 pixels per inch (pp)",
          image:"https://imgs.search.brave.com/IiE8e-u8yMQ9ITrbg3AiwyswG_AVJibk8HuMcCmOIeA/rs:fit:1152:768:1/g:ce/aHR0cHM6Ly93d3cu/bWFjZ2FzbS5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMTMv/MTAvNXNXaWRlSGFu/ZC5qcGc"
        },
        {
          name:"iphone 13 pro",
          category:"Mobile",
          description:"Apple iPhone 4S mobile was launched in October 2011. The phone comes with a 3.50-inch touchscreen display with a resolution of 640x960 pixels at a pixel density of 326 pixels per inch (pp)",
          image:"https://imgs.search.brave.com/arPzobYxmjKmKKAvWHXPwMIGeivZmqv9yAOOFvMFGPI/rs:fit:920:613:1/g:ce/aHR0cHM6Ly93d3cu/dHJ1c3RlZHJldmll/d3MuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9zaXRlcy81NC8y/MDIwLzEwL0RTQzAx/MDE0LTkyMHg2MTMu/anBlZw"
        }
      ];
    
    res.render('cart',{products})
})
app.get('/list',(req,res)=>{
    let items=[
        {
          name:"1.Realme 9i (Prism Black, 128 GB)",
          description:`Handset, Adapter, USB Cable, Important Info Booklet with Warranty Card, Quick Guide, SIM Card Tool, Screen Protect Film, Case`,
    
        },
        {
          name:"2.iPhone X",
          description:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system."
        },
        {
          name:"3.Samsung F12 pro",
          description:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system."
        },
        {
          name:"4.poco c6",
          description:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system."
        },
        {
          name:"5.Realme",
          description:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system."
        },
        {
          name:"6.iPhone 5s",
          description:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system."
        },
        {
          name:"3.Samsung F12 pro",
          description:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system."
        },
        {
          name:"1.Realme 9i (Prism Black, 128 GB)",
          description:`Handset, Adapter, USB Cable, Important Info Booklet with Warranty Card, Quick Guide, SIM Card Tool, Screen Protect Film, Case`,
    
        }
      ]

    res.render('list-items',{items})
})

app.get('/form',(req,res)=>{

    res.render('index')
})
app.post('/form-submit',(req,res)=>{
    const email=req.body.email;
    const pass=req.body.password;
    res.write(`your entered user email is ${email} and password is ${pass}`)
    res.end();

})
app.listen(3000,()=>{console.log("Server started....!!")})