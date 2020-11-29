import "./App.css";
import { useState } from "react";
import Axios from "axios";
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, FormText, FormFeedback,
  } from 'reactstrap';
  import './App.css';
  import Table from 'react-bootstrap/Table';
import { useHistory } from "react-router-dom";
//import Cart from "./cart";

export  function Cart(){



    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    
    
    
    }
    



function Login(){

    const [name,setName] = useState("");
    const [password,setPassword]=useState("");
    const [role,setRole]=useState("");
    const history=useHistory();
    const [loginstatus,setStatus]=useState("");
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
                setStatus(response.data.name);
                history.push("/cart")
                
            }
            console.log(response);
        });

    };


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
          <Col>
            <FormGroup>
            <Label for="exampleRole">Pick your Role:</Label>
          
          <select value={ role }  onChange={ (e)=>
                  setRole(e.target.value)}>    
            <option value="role">Role</option>      
            <option value="customer">Customer</option>
            <option value="farmer">Farmer</option>
           
          </select>
        
        </FormGroup>
        </Col>
          <Button onClick={login}>LOGIN</Button>
          </Form>
        <h1>{loginstatus}</h1>
    </Container>



   );

}

export default Login;