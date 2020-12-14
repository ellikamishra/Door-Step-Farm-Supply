import React, { Fragment, useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CartItem from './CartItem';
import Axios from 'axios';

const Cart = ({products, changeQuantity}) => {
    const [show, setShow] = useState(false);
    const [classActive, toggleClass] = useState(false);
    const [sum, setSum] = useState(0);
    const[net,setQnty]=useState(0);
    const[name,setName]=useState("");
    const[uid,setUId]=useState(0);
    const[id,setId]=useState([]);
    const toggleButton = () => {
        toggleClass(!classActive);
    }

    useEffect(() => {
        let total = 0;
        let qnty=0;
        let ids=[];
        for(var i = 0; i < products.length ; i++) {
            total+= products[i].price*products[i].quantity;
            qnty+=products[i].quantity;
            ids.push(Number(products[i].id));
        }
        setSum(total);
        setQnty(qnty);
        setId(ids);
        console.log(total);
        console.log(qnty);
        console.log(ids);
    }, [products])
    

    const checkout = () => {
        if(uid==0||name===""){alert("Required id and Username for order!")}
    else{
    Axios.post("http://localhost:3001/api/cart",{
          
          no_of_items:net,
          cost_due:sum,
          cust_name:name,
          cust_id:uid,
          farm_id:id,
          crop_id:id
       
          }).then((response)=>{
           if(response.data.message){

           }
           else{
             alert("Added to cart!");
           }
          });
        }
     

    }

    return (
        <Fragment>
            <div id="sidebar" className={classActive ? "active" : ""}>
                <div className="sidebar-content">
                    <div className="toggle-btn" onClick={toggleButton}>
                        <span className="span-1">Cart</span>
                        <br/>
                        {/* <span className="span-2"></span>*/}
                        <span className="span-3"></span> 
                    </div>
                    
                    <div className="cart-content">
                    <h3>
                        <img src="https://checkout.advancedshippingmanager.com/wp-content/uploads/2015/10/Cart-Icon-PNG-Graphic-Cave-e1461785088730-300x300.png" alt="cart" />
                        Cart
                    </h3> 

                    <div className="cart-list">
                        {
                            products.length === 0 
                            ? 
                            <div className="empty-cart">
                                <p>There are no items in Cart, Please add items to checkout!!!</p>
                            </div> 
                            :
                            products.map(product => {
                                return (
                                    <CartItem 
                                        key={product.id} 
                                        product={product} 
                                        changeQuantity={changeQuantity} 
                                         />
                                )
                            })
                        }
                    </div>
                   
                    <div className="checkout-div">
                    <br/>
                    <br/>
                    <br/>
                        <div className="checkout">
                                <div className="subtotal-div">
                                    <p className="subtotal">SUBTOTAL</p>
                                    <p className="subtotal-price">INR {sum.toFixed(2)}</p>
                                </div>
                              
                              <input className="table-data"
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

           
           {/* <p className="subtotal">ID</p> */}
           <input className="table-data"
         name="cust-id"
         type="text"
         required
         placeholder='customer id for confirmation '
         onChange={ (e)=>
          setUId(e.target.value) }
         >
         
         </input>
        
                                <button className="checkout-btn" onClick={checkout}>CHECKOUT</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Cart;