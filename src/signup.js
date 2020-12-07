import "./App.css";
import { useState } from "react";
import Axios from "axios";
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, FormText, FormFeedback,
  } from 'reactstrap';
  import Validate from './ValidateInfo';
  import './App.css';
import {useForm } from 'react-hook-form';


function allLetter(inputtxt)
  {
   var letters = /^[A-Za-z]+$/;
   if(inputtxt.value.match(letters))
     {
      return true;
     }
   else
     {
     alert("message");
     return false;
     }
  }



function Signup(){

    const [name,setName] = useState("");
    const [password,setPassword]=useState("");
    const [address,setAddress]=useState("");
    const [contact,setContact]=useState("");
    
   


    const register1=()=>{
        

        Axios.post("http://localhost:3001/api/insert",{
        name:name,
        password:password,
        address:address,
        contact:contact,
        

        }).then((response)=>{
          if(response.data.message){
            alert("Error in signup!");
        }
        else{
          
           
          alert("Registeration done!Login to shop.")
          console.log(response);
      }
           
         
            
        });
         

    };

    const values={
      name:name,
      password:password,
      address:address,
      contact:contact
   
     }
     const errors = Validate(values);
   return(

    <Container>
<Form className="form" onSubmit={ (e) => this.submitForm(e) }>
        <Col>
            <FormGroup>
              <Label for="exampleName">Name</Label>
              <Input
                type="text"
                name="name"
                id="exampleName"
                placeholder="Name"
                required
                value={ name }
                // ref={register({ required: true,  maxLength : {
                //   value: 2,
                //   message:  <p>error message</p> //
                //  } })}
                // onKeyPress={(e)=>
                // {if(!/^[A-Za-z]+$/.test(e.key))
                //   { e.preventDefault();}
                // }}
                onChange={ 
                  (e) => { 
                 
                  setName(e.target.value)  
                  
                

                }
                }
                />
                {errors && (
                  <small id='nameErr' className='form-text text-danger'>
                    {errors.name}
                  </small>)}

           
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="(4-12) characters long"
                value={ password }
                required
                onChange={ (e)=>
                  
                 { setPassword(e.target.value) } }
            />
             {errors && (
                    <small id='passwordErr' className='form-text text-danger'>
                      {errors.password}
                    </small>
                  )}
            </FormGroup>
          </Col>
          
          <Col>
            <FormGroup>
              <Label for="exampleAddress">Address</Label>
              <Input
                type="text"
                name="address"
                id="exampleAddress"
                placeholder="Address"
                required
                value={ address }
                
                onChange={ (e)=>
                  
                  {
                  setAddress(e.target.value)}
                 }
            />
                         {errors && (
                    <small id='addressErr' className='form-text text-danger'>
                      {errors.address}
                    </small>
                  )}
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="exampleEmail">Contact</Label>
              <Input
                type="email"
                name="contact"
                id="exampleEmail"
                placeholder="myemail@email.com"
                value={ contact }
                
               onChange={ (e)=>{setContact(e.target.value)}}
              //onChange={(e)=>{setValName()}}
                //  { if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.value))
                //   {
                //    // document.querySelector('#exampleEmail').innerHTML="Invalid!"
                //    //alert('Invalid')
                //   }
                  //else{
                    
                   // document.querySelector('#exampleEmail').innerHTML="valid!"
                    
                  //}
                
              
                  
                
              />
             {errors && (
                    <small id='nameErr' className='form-text text-danger'>
                      {errors.email}
                    </small>
                  )}
            </FormGroup>
          </Col>
          
          <Button onClick={register1}>SUBMIT</Button>
          </Form>

    </Container>



   );

}

export default Signup;