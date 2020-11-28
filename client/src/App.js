import React, { useContext, useEffect } from 'react';
import './CSS/App.css';
import Header from './Components/Layout/Header';
import Nav from './Components/Layout/Nav';
import Footer from './Components/Layout/Footer';
import Home from './Components/Content/Home';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Cart from './Components/Content/Cart';
import Category from './Components/Content/Category';
import SignUp from './Components/Auth/SignUp';
import Header2 from "./Components/Layout/Header2"
import Items from './Components/Content/Items';
import Login from './Components/Auth/Login';
import { auth, db } from './Config/fbConfig';
import { context } from './Context/contextProvider';
import Inventory from './Functions/Inventory';


function App() {
  const {dispatch} = useContext(context)
  
  return (
    <div className="App">
    <Router>
        <Switch>
            <Route path="/Login" exact>
              <Header2/>
              <div id="content">
                <Login/>
              </div>
              <Footer/>
            </Route>

            <Route path="/Signup" exact>
              <Header2/>
              <div id="content">
                <SignUp/>
              </div>
              <Footer/>
            </Route>
            
            <Route path="/Cart" exact>
              <Header/>
              <Nav/>
              <div id="content">
                <Cart/>
              </div>
              <Footer/>
            </Route>

            <Route path="/:category/:item" 
            component={(props)=>(
              <>
                <Header/>
                <Nav/>
                <div id="content">
                  <Items {...props}/>
                </div>
                <Footer/>
              </>
            )}
            >
            </Route>

            <Route path="/:category" 
            component={(props)=>(
              <>
                <Header/>
                <Nav/>
                <div id="content">
                  <Category {...props}/>
                </div>
                <Footer/>
              </>
            )}>
            </Route>

            <Route path="/" exact>
              <Header/>
              <Nav/>
              <div id="content">
                <Home/>
              </div>
              <Footer/>
            </Route>
        </Switch>
    </Router>
    <div id="blur" ></div>
    </div>
  );
}

export default App;


