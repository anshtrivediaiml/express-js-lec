const express= require('express');
const app=express();

app.use(express.static('public'));
app.get('/home',(req,res)=>{
    // res.send('<h1>Haan dekhle bhai</h1>');
    res.sendFile(__dirname+'/home.html');
})

app.get('/about',(req,res)=>{
    // res.send("Kya karoge jaanke");
    res.sendFile(__dirname+'/about.html');
})
app.get('/contact',(req,res)=>{
    // res.send("Kya karoge jaanke");
    res.sendFile(__dirname+'/contact.html');
})

app.get('/marksheet',(req,res)=>{
    res.sendFile(__dirname+'/marksheet.html');
})

app.get('/marks',(req,res)=>{
    var english=parseInt(req.query.english);
    var maths=parseInt(req.query.maths);
    var science=parseInt(req.query.science);

    res.send(`<h1>Your Result:</h1> 
        <table border=2>
        <thead>
        <th>Subject</th>
        <th>Marks</th>
        </thead>
        <tbody>
        <tr>
        <td>MATHS</td>
        <td>${maths}</td>
        </tr>
        <tr>
        <td>Science</td>
        <td>${science}</td>
        </tr>
        <tr>
        <td>English</td>
        <td>${english}</td>
        </tr>
        </tbody>
        <tfooter>
        <tr>
        <td>Total</td>
        <td>${maths+science+english}</td>
        </tr>
        </tfooter>
 
        </table>
        `)
})


app.listen(3000,()=>{
    console.log("Server started");
})