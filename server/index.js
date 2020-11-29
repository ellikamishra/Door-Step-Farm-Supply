const express=require('express');
const bodyParser=require('body-parser');
const mysql=require('mysql');
const cors=require('cors');
const app=express();
const PORT=process.env.PORT||3001; 
app.use(cors());
app.use(express.json());
const db=mysql.createPool({

    host: 'localhost',
    user: 'root',
    password:'password',
    database: 'farmsupply'
    
});

//   db.end(function(err) {
//     if (err) {
//       return console.log(err.message);
//     }
//     // close all connections
//   });
app.use(bodyParser.urlencoded({extended: true}));
app.post('/api/insert',(req,res)=>
{
    const name=req.body.name
    const address=req.body.address
    const pswd=req.body.password
    const contact=req.body.contact
    const role=req.body.role
    db.getConnection(function(error, connection) {
        // execute query
        // ...
    if(error)
    {
        console.log(error);
    
    }
    else{    
    connection.query('INSERT INTO Users(name,pswd,address,contact,role) VALUES (?,?,?,?,?)',[name,pswd,address,contact,role],(err,result)=>{
        console.log(err);
    });
    }
      });
      

});
app.post('/api/login',(req,res)=>
{
    const name=req.body.name
    
    const pswd=req.body.password
    
    const role=req.body.role
    db.getConnection(function(error, connection) {
        // execute query
        // ...
    if(error)
    {
        console.log(error);
    
    }
    else{    
    connection.query('SELECT* from Users where name = ? and pswd = ? ',[name,pswd],(err,result)=>{
        if(err){
        return  res.send({err:err});
        console.log(err);
        }
        else if(result){
        res.send(result);
       }
        else{
         res.send({message:"Invalid credentials!"});  
        }
    });
    }
      });
      //res.send('hello');

});
app.listen(PORT,(req,res)=>{                          //app listening to port (localhost),using postman app to get and post requests
    console.log(`listening to port ${PORT}`);
})

