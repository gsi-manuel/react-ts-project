import React, { Component } from 'react';
import './Login.scss';

const logo = require('../../../assets/images/User_login_man_profile_account.png');

export class Login extends Component {
    render() {
        return (
            <div className="row">
                <div className="row-col-3"/>
                <div className="row-col-6">
                    <form className="login-box">
                        <div className="login-box__imgcontainer">
                            <img src={logo} alt="Avatar" className="login-box__avatar"/>
                        </div>

                        <div className="login-box__container">
                            <label htmlFor="uname"><b>Username</b></label>
                            <input 
                                className="login-box__inputs" 
                                type="text" 
                                placeholder="Enter Username" 
                                name="uname" 
                            />

                            <label htmlFor="psw"><b>Password</b></label>
                            <input 
                                className="login-box__inputs" 
                                type="password" 
                                placeholder="Enter Password" 
                                name="psw" 
                            />

                            <button className="login-box__button-submit" type="submit">Login</button>
                            <label>
                                <input type="checkbox" defaultChecked={true} name="remember" /> Remember me
                            </label>
                        </div>
                    </form>
                </div>
                <div className="row-col-3"/>
            </div>
        );
    }
}

export default Login;