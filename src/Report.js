import {React,useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Axios from "axios";

function Report(){
    const [show, setShow] = useState(false);
    const [farm_name,setName]=useState("");
    const[farm_area,setArea]=useState("");
    const handleClose1=()=>{
      setShow(false);
    }
    const handleClose = () =>{
        
        
        setShow(false);
        Axios.post("http://localhost:3001/api/insertfarm",{
        name:farm_name,
        area:farm_area,
        
        

        }).then((response)=>{
          if(response.data.message){
            alert("Error in adding!");
        }
        else{
          
           
          alert("Added farmer!")
          console.log(response);
      }
           
         
            
        });
         

    };

        
    
    const handleShow = () => setShow(true);
return(
    <div>
<Card bg="success">
  {/* <Card.Header>Add new farmer</Card.Header> */}
  <Card.Body >
    <Card.Title text="white"></Card.Title>
    <Card.Text>
      Click to insert new farmer.
    </Card.Text>
    <Modal show={show} onHide={handleClose1}dialogClassName="modal-90w" size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
          <Modal.Header closeButton>
            <Modal.Title>Add Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>Add name and area of new farmer-
              <br/>
              <br/>
       Name  <input type="text" placeholder="farmer name" onChange={(e)=>{setName(e.target.value)}}/>
        <br/>
       <br/>
       Area  <input type="text" placeholder="farmer area" onChange={(e)=>{setArea(e.target.value)}}/>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    <Button variant="primary" onClick={handleShow}>Continue here</Button>
  </Card.Body>
</Card>
<br/>
<br/>
<Card bg="success">
  {/* <Card.Header>Report</Card.Header> */}
  <Card.Body>
    
    <Card.Text>
      Report with Monthly statistics.
    </Card.Text>
    <Button variant="primary" href="./order">Continue here</Button>
  </Card.Body>
</Card>
</div>
);
}

export default Report;