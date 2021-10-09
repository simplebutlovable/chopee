import React, { Component } from 'react';
import "../Authentication/Auth_css/login.css";


function Login(){
    return(
        <div className="login_page">
            <div className="login_header">
                <p>Login</p>
                <form id="login_form">
                    <input type="text" name="username" id="username" placeholder="Username"/>
                    <input type="password" name="password" id="password" placeholder="Password"/>
                    <input type="submit" value="Login" id="login"/>
                </form>

                <div className="recovery">
                    <p><a href="#">Forget Password</a></p>
                    <p><a href="#">Login with SMS</a></p>
                </div>

                <div className="login_or">
                    <div className="login_line_divider">
                    </div>
                    <p>OR</p>
                </div>

                <div className="login_options">
                    <a href="#" id="fb_c">
                      <div className="img_wrapper">
                        <img src={`${process.env.PUBLIC_URL}/images/fb.png`}/>
                      </div>
                        <p>Facebook</p>
                    </a>
                    <a href="#" id="google_c">
                        <div className="img_wrapper">
                            <img id="google_logo" src={`${process.env.PUBLIC_URL}/images/google.jpg`} />
                        </div>
                        <p>Google</p>
                    </a>
                    <a href="#" id="apple_c">
                        <div className="img_wrapper">
                            <img src={`${process.env.PUBLIC_URL}/images/apple.png`}/>
                        </div>
                        <p>Apple</p>
                    </a>
                    
            </div>
            </div>
        </div>
    );
}

export default Login