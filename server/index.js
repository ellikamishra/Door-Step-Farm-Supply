const express=require('express');
const bodyParser=require('body-parser');
const mysql=require('mysql');
const cors=require('cors');
const app=express();
const PORT=process.env.PORT||3001; 
app.use(cors());
//app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//app.use(express.static("./"));
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
    const name=req.body.name;
    const address=req.body.address;
    const pswd=req.body.password;
    const contact=req.body.contact;
    
    db.getConnection(function(error, connection) {
        // execute query
        // ...
    if(error)
    {
        console.log(error);
    
    }
    else{    
    connection.query('INSERT INTO Users(name,pswd,address,contact) VALUES (?,?,?,?)',[name,pswd,address,contact],(err,result)=>{
        if(err){
            return  res.send({err:err});
            console.log(err);
            }
            if(result){
            console.log(result);
            res.send(result);
            
           }

    });
    }
      });
      

});
app.post('/api/insertfarm',(req,res)=>
{
    const name=req.body.name;
    const area=req.body.area;
    
    db.getConnection(function(error, connection) {
        // execute query
        // ...
    if(error)
    {
        console.log(error);
    
    }
    else{    
    connection.query('INSERT INTO farmer(name,area) VALUES (?,?)',[name,area],(err,result)=>{
        if(err){
            return  res.send({err:err});
            console.log(err);
            }
            if(result){
            console.log(result);
            res.send(result);
            
           }

    });
    }
      });
      

});
app.post('/api/login',(req,res)=>
{
    const name=req.body.name;
    
    const pswd=req.body.password;
    console.log(pswd);
    const role=req.body.role
    db.getConnection(function(error, connection) {
        // execute query
        // ...
    if(error)
    {
        console.log(error);
    
    }
    else{    
    connection.query("SELECT * from Users WHERE name = ?",[name],(err,result,fields)=>{
       
        if(err){
            console.log(err);
        return  res.send({err:err});
      
        }
        if(result.length >0){
            console.log(result);
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
app.post('/api/cart',(req,res)=>
{
    const no_of_items=Number(req.body.no_of_items);
    
    const cost_due=Number(req.body.cost_due);
    const cust_name=req.body.cust_name;
    const cust_id=Number(req.body.cust_id);
    const farm_id=req.body.farm_id;
    const crop_id=req.body.crop_id;
    console.log(farm_id[0]);
    if(cust_id==0)
    {
       return res.send("Invalid!");
    }
    else{
    db.getConnection(function(error, connection) {
        // execute query
        // ...
    if(error)
    {
        console.log(error);
    
    }
    else{    
    connection.query('INSERT INTO orders(no_of_items,cost_due,cust_name,cust_id,farm_id,crop_id) VALUES (?,?,?,?,?,?)',[no_of_items,cost_due,cust_name,cust_id,farm_id[0],crop_id[0]],(err,result)=>{
        if(err){
        return  res.send({err:err});
        console.log(err);
        }
        else if(result){
            console.log(cost_due)
            console.log(no_of_items)
        res.send(result);
       }
        else{
         res.send({message:"Invalid credentials!"});  
        }
    
    });
  //  for(int i=0;i<farm_id[0].length)
    //farm_id[0].forEach(connection.query('INSERT INTO farm_ord(fid) VALUES(?)',[],(err,result)=>))
//    let index=0;
//     while(index < farm_id[0].length)
//     {
//         connection.query('INSERT INTO farm_ord(fid) VALUES(?)',[farm_id[0][index]],(err,result)=>{
//             if(err){
//                 console.log(err);
//                 return  res.send({err:err});
                
//                 }
//                 else if(result){
//                     console.log(cost_due)
//                     console.log(no_of_items)
//                 res.send(result);
//                }
//                 else{
//                  res.send({message:"Invalid credentials!"});  
//                 }
//         })
//         index++;
//     }
    }
      });
      //res.send('hello');
    }
});
app.post('/api/admin',(req,res)=>
{
    const uname=req.body.name;
    
    const pswd=req.body.password;
    //console.log(pswd);
    const role=req.body.role
    db.getConnection(function(error, connection) {
        // execute query
        // ...
    if(error)
    {
        console.log(error);
    
    }
    else{    
    connection.query("SELECT * from Admin WHERE uname = ?",[uname],(err,result,fields)=>{
       
        if(err){
            console.log(err);
        return  res.send({err:err});
      
        }
        if(result){
            console.log(result);
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

