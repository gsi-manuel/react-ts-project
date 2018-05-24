import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const logo = require('../../../assets/images/512px-React-icon.svg.ico');
export class Header extends Component {
    render() {
        return (
            <div className="row">
                <div className="row-col-12">
                    <div className="row header">
                        <div className="row-col-1 ">
                            <img src={logo} className="header__logo" alt="logo" />
                        </div>
                        <div className="row-col-5 logo"/>
                        <div className="row-col-6">
                            <div className="row" id="main-menu">                                
                                <Link className="row-col-4 header__links header__links--hover" to="/">
                                    <i className="fas fa-chart-line"/>   DASHBOARD
                                </Link>
                                 
                                <a className="row-col-2 header__links header__links--hover" href="#">
                                    <i className="fas fa-user"/>   users
                                </a>
                                <a className="row-col-3 header__links header__links--hover" href="#">
                                <i className="fas fa-spinner fa-pulse"/>   Spinner
                                </a>
                                <Link className="row-col-2 header__links header__links--hover" to="/radio">
                                    <i className="fas fa-robot"/>   radio
                                </Link>
                                <Link className="row-col-1 header__links header__links--hover" to="/login">
                                    <i className="fas fa-power-off"/>
                                </Link>
                                                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;