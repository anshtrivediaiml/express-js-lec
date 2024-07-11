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
    var total=english+maths+science;
    var avg=total/3;
    var grade;
    var color;
    if(avg>=80){
        grade='A';
        color="green";
    }
    else if(grade>=60){
        grade='B';
        color="yellow";
    }
    else if(grade>=40){
        grade='C';
        color="orange";
    }
    else{
        grade='F';
        color="red";
    }

    res.send(`<h1>Your Result:</h1> 
        <table border=12 style="border-color:${color};" cellpadding=15  align=center>
        <thead style="background-color:#aeae">
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
        <td><b>Total</b></td>
        <td><b>${total}</b></td>
        </tr>
        <tr style="background-color:#aeae">
        <td><b>Grade</b></td>
        <td><b>${grade}</b></td>
        </tr>
        </tfooter>
 
        </table>
        `)
})


app.listen(3000,()=>{
    console.log("Server started");
})