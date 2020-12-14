import "./App.css";
import { React,useEffect,useState } from "react";
import Axios from "axios";
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, FormText, FormFeedback,
  } from 'reactstrap';
  import './App.css';
  import Table from 'react-bootstrap/Table';
import { Router, useHistory,Route,Link, useLocation,Redirect} from "react-router-dom";
//import Cart from "./cart";

function Login(){

    const [name,setName] = useState("");
    const [password,setPassword]=useState("");
    const [role,setRole]=useState("");
    // const history=useHistory();
    // const loc=useLocation();
    const [loginstatus,setStatus]=useState(0);
    const login=()=>{
        Axios.post("http://localhost:3001/api/login",{
        name:name,
        pswd:password,
        role:role

        }).then((response)=>{
            if(response.data.message){
                setStatus(response.data.message)
            }
            else{
              
                setStatus(1);
                 let id=parseInt(response.data[0].id)
                alert("Successful login as "+response.data[0].name+",User Id-"+id);
                console.log(response);
                
             
                
            }
            
            
        });

    };
    // useEffect(()=>{
    //   if(loginstatus)
    //  { return <Cart/>}
    // })
   if(loginstatus)
   {
    
    return <Redirect to='/cart'/>;
   
  }
   return(

    <Container>
<Form className="form">
        <Col>
            <FormGroup>
              <Label for="exampleName">Name</Label>
              <Input
                type="text"
                name="name"
                id="exampleName"
                placeholder="Name"
                value={ name }               
                onChange={ (e) => {
                  {setName(e.target.value)  } 
                  
                }
                }/></FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                value={ password }
                onChange={ (e)=>
                  setPassword(e.target.value) }
            />
            </FormGroup>
          </Col>
          
          <Button onClick={login}>LOGIN</Button>
          </Form>

       {/* <Link to="/cart">
       <h1>{loginstatus}</h1>
     </Link> */}
        
        {/* <Router>
        <Route path="/cart" exact render={() => <Cart/>}/>
        </Router> */}
    </Container>



   );

}

export default Login;