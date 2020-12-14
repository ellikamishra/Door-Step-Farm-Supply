import "./App.css";
import { React,useEffect,useState } from "react";
import Axios from "axios";
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, FormText, FormFeedback,
  } from 'reactstrap';
  import './App.css';
import { Redirect } from "react-router-dom";


  function Admin(){

    const [name,setName] = useState("");
    const [password,setPassword]=useState("");
    const [role,setRole]=useState("");
    // const history=useHistory();
    // const loc=useLocation();
    const [loginstatus,setStatus]=useState(0);
    const admin=()=>{
        Axios.post("http://localhost:3001/api/admin",{
        uname:name,
        pswd:password,
        role:role

        }).then((response)=>{
            if(response.data.message){
               
            }
            else{
              
               setStatus(1);
                // let id=parseInt(response.data[0].id)
                alert("Successful login");
                
                console.log(response.data);
                <Redirect to='/report'/>;
             
                
            }
            
            
        });

    };
    // useEffect(()=>{
    //   if(loginstatus)
    //  { return <Cart/>}
    // })
    if(loginstatus)
   {
    
    return <Redirect to='/report'/>;
   
  }
   return(

    <Container>
<Form className="form">
   <h4>Login for Admin.</h4> 
    <br/>
    <br/>
    <br/>
        <Col>
            <FormGroup>
              <Label for="exampleName">Username</Label>
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
          <br/>
          <Button onClick={admin}>LOGIN</Button>
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

export default Admin;