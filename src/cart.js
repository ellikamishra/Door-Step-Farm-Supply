


import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Axios from "axios";
import "./Cart.css";

const _defaultCosts = [
  {
    name: "Rice",
    price: 50,
    Quantity: 0,
    Farmer:"Ram"
  },
  {
    name:"Ragi",
    price: 20,
    Quantity: 0,
    Farmer:"Vinay"
  },
  {
    name: "Dal",
    price: 30,
    Quantity: 0,
    Farmer:"Abdul",
  }
];

const Cart = () => {
  let tot=0,qn=0;
  const [costs, setCosts] = useState(_defaultCosts);
  const [cust_name,setName]=useState("");
  const [cust_id,setId]=useState("");
  const [items_list,setItem]=useState(()=>{
   return _defaultCosts}
  );
 // const [cost_due,setPrice]=useState(0);
  const handleCostsChange = (event) => {
    const _tempCosts = [...costs];
    
    _tempCosts[event.target.dataset.id][event.target.name] = event.target.value;

    setCosts(_tempCosts);

   // setItem(no_of_items=>no_of_items+Number(costs.reduce((t,items)=> t+items.Quantity,0)));
   // setCosts()
   setItem(_tempCosts)
    console.log(items_list[0])
  };
  const order=()=>{
    Axios.post("http://localhost:3001/api/cart",{
          no_of_items:items_list.reduce((t,items)=> t+Number((items.Quantity)),0),
          cost_due:items_list.reduce((t,items)=> t+(items.Quantity*items.price),0),
          cust_name:cust_name,
          cust_id:cust_id
       
          }).then((response)=>{
           if(response.data.message){

           }
           else{
             alert("Added to cart!");
           }
          });
  
  }
 

  const getTotalCosts = () => {
    return costs.reduce((total, item) => {
      
      
      return total + Number(item.price * item.Quantity);
    }, 0);
    
  };

 const getNumber=()=>{
   return costs.reduce((qnty,item)=>{
     
   return qnty+Number(item.Quantity);
   },0)
 }

 
   
 // setItem(costs.reduce((t,items)=> t+items.Quantity,0))
  return (
    <div className="table">
      <div className="table-title">Food costs</div>
      <div className="table-content">
        <div className="table-header">
          <div className="table-row">
            <div className="table-data">
              <div>Item</div>
            </div>
            <div className="table-data">
              <div>Farmer</div>
            </div>
            <div className="table-data">
              <div>Price</div>
            </div>
            <div className="table-data">
              <div>Quantity</div>
            </div>
          </div>
        </div>
        <div className="table-body">
          { costs.map( (item, index) => (
            <div className="table-row" key={index}>
              <div className="table-data">
                <span
                  name="name"
                  data-id={index}
                  type="text"
                  value={item.name}>
                    {item.name}
              </span>
              </div>
              <div className="table-data">
                <span
                  name="farmer"
                  data-id={index}
                  type="text"
                  value={item.Farmer}>
                    {item.Farmer}
              </span>
              </div>
              <div className="table-data">
                <div
                  name="price"
                  data-id={index}
                  type="text"
                  value={item.price}
                  >
                      {item.price}
                </div>
              </div>
              <div className="table-data">
                <input
                  name="Quantity"
                  data-id={index}
                  type="number"
                  value={item.Quantity}
                  onChange={handleCostsChange}
                />
              </div>
            </div>
          ))}
         
        </div>
        <br/>
        <br/>
        <div className="table-footer">
          <div className="table-row">
            <div className="table-data">
              <div>Total Cost</div>
            </div>
            <div className="table-data">
              <div>{getTotalCosts()}
                  </div>
            </div>

           <br/>
           <br/>  
          </div>
        <div className="table-row" style={{marginleft:"10%"}}>
            <div className="table-data">
              <div>Net Quantity</div>
            </div>
            <div className="table-data">
              <div>{getNumber()}</div>
            </div>
          </div>
        </div>
        <br/>
        Name-<input className="table-data"
         name="cust-name"
         type="text"
         required
         placeholder='customer name for confirmation '
         onChange={ (e)=>
          setName(e.target.value) }
         >
           
           </input>

           <br/>
           <br/>
         ID-<input className="table-data"
         name="cust-id"
         type="text"
         required
         placeholder='customer id for confirmation '
         onChange={ (e)=>
          setId(e.target.value) }
         >
         
         </input>
      </div>
      <br/>
      <br/>
      <Button onClick={order}>Place order</Button>
    </div>
    
  );
}








export default Cart;