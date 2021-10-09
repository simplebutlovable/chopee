import React, { Component } from 'react';
import "./css/authenticate.css";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Footer from"./components/Footer";
import SignUp from "./components/Authentication/Signup";
import Login from "./components/Authentication/Login";

function Authenticate(){
    return(
        <div className="auth_main_page">
            <nav className="auth_nav">
                <div className="auth_header_wrapper">
                    <div className="chopee_logo_holder">
                        <a href="#">
                       <Link to="/">
                            <img src={`${process.env.PUBLIC_URL}/images/Chopee-orange.png`} alt="chopee"/>
                           </Link>
                        </a>
                    </div>
                    <div className="auth_help">
                        <a href="#">
                            <p>Need Help?</p>
                        </a>
                    </div>
                </div>
        </nav>
        <div className="page_body_wrapper">
            <div className="page_body">
                <div className="sale_banner">
                    <img  src={`${process.env.PUBLIC_URL}/images/Sale.png`} />
                </div>
                <div className="auth_forms">
                    <Route exact path = "/user/auth/signup/" component={SignUp}>
                        <SignUp/>
                    </Route>
                    <Route exact path="/user/auth/login/" component={Login}>
                        <Login/>  
                    </Route>                  
                </div>   
            </div>
        </div>
        <Footer/>
    </div>
    );
}

export default Authenticate