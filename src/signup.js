import "./App.css";
import { useState } from "react";
import Axios from "axios";
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, FormText, FormFeedback,
  } from 'reactstrap';
  import './App.css';
import {useForm } from 'react-hook-form';






function Signup(){

    const [name,setName] = useState("");
    const [password,setPassword]=useState("");
    const [address,setAddress]=useState("");
    const [contact,setContact]=useState("");
    const [role,setRole]=useState("");
    const register1=()=>{
        Axios.post("http://localhost:3001/api/insert",{
        name:name,
        password:password,
        address:address,
        contact:contact,
        role:role

        }).then((response)=>{
            console.log(response);
        });

    };

    // const submitForm = (e) =>{
    //   e.preventDefault();
    //   console.log(`name: ${ this.state.name }`)
    // };
    //  const handleChange = async (event) => {
    //   const { target } = event;
    //   const value = target.type === 'checkbox' ? target.checked : target.value;
    //   const { name } = target;
    //   await this.setState({
    //     [ name ]: value,
        
    //   });
      
    // }

   
    // const { register, handleSubmit } = useForm();
    // const onSubmit = data => console.log(data);
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
                value={ name }
                // ref={register({ required: true,  maxLength : {
                //   value: 2,
                //   message:  <p>error message</p> //
                //  } })}
                
                onChange={ (e) => {
                  {setName(e.target.value)  } 
                  
                }
                }
                
            />
           
            </FormGroup>
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
              <Label for="exampleAddress">Address</Label>
              <Input
                type="text"
                name="address"
                id="exampleAddress"
                placeholder="Address"
                value={ address }
                onChange={ (e)=>
                  setAddress(e.target.value)
                 }
            />
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
                onChange={ (e)=>
                  setContact(e.target.value) }
              />
             
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
            <Label for="exampleRole">Pick your Role:</Label>
          
          <select value={ role }  onChange={ (e)=>
                  setRole(e.target.value)}>    
            <option value="">Role</option>         
            <option value="customer">Customer</option>
            <option value="farmer">Farmer</option>
           
          </select>
        
        </FormGroup>
        </Col>
          <Button onClick={register1}>SUBMIT</Button>
          </Form>

    </Container>



   );

}

export default Signup;