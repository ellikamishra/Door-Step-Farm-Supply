
import './App.css';
import react from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Customer from './Customer';
import Home from './Home';
import Farmer from './farmer';
import Login from './login';
import Signup from './signup';
import {  BrowserRouter as Router,Redirect,Link,Route} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

class App extends react.Component {


render(){
  return (
<Container className='p-0' fluid={true} >
  <Router>
    <Navbar className="border-bottom" bg="light" expand="lg">
            <Navbar.Brand>Door Step Fram Supply</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/signup">Signup</Link>
                <Link className="nav-link" to="/login">Login</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </Router>
          <div className="App">
<h1>Welcome!</h1>


    </div>
    <Router>
    <Route path="/" exact render={() => <Home/>}/>
    <Route path="/signup" exact render={() => <Signup/>}/>
      <Route path="/login" render={() => <Login/>}/>

      {/* <Route path="/customer" render={() => <Customer/>}/>
      <Route path="/farmer" render={() => <Farmer/>}/> */}
      
      </Router>

      
      </Container>

    
  );
}
}

export default App;
