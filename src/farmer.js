import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form1 from './Form1';

import Signup from './signup';
class Farmer extends Component{

    constructor(props){

        super();
        this.state = {render:''}
        
    }
    handleClick(compName, e){
        console.log(compName);
        this.setState({render:compName});        
      }
      _renderSubComp(){
          switch(this.state.render){
            case 'login': return <Form1/>
            case 'signup' : return <Signup/>
            
          }
      }

    

render(){


    return(


        <div style={{margin:"10%"}}>
            About Farmer
       <br/>
       <br/><br/><br/>
       
<Button variant="primary" size="lg" active
onClick={this.handleClick.bind(this, 'login')}>
LOGIN
</Button>{''}
<Button variant="primary" size="lg" active
onClick={this.handleClick.bind(this, 'signup')}>
SIGNUP
</Button>
{this._renderSubComp()}

        </div>
    );
}



}

export default Farmer;