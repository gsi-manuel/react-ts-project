import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const logo = require('../../../assets/images/logo.svg');
export class Header extends Component {

    constructor(props: any) {
        super(props);

        this.responsiveFunction = this.responsiveFunction.bind(this);
    }
    public responsiveFunction() {
        let x = document.getElementById('main-menu');
        if (x!.className === 'row header__topnav') {
            x!.className += ' responsive';
        } else {
            x!.className = 'row header__topnav';
        }
    }

    render() {
        return (
            <div className="row">
                <div className="row-col-12">
                    <div className="row header">
                        <div className="row-col-2">
                            <div className="row">
                                <div className="header__container-logo">
                                    <Link to="/">
                                        <img src={logo} className="header__logo" alt="logo" />
                                    </Link>
                                </div>
                                <div className="header__container-icon">
                                    <a 
                                        href="javascript:void(0);" 
                                        className="header__icon header__links" 
                                        onClick={this.responsiveFunction}
                                    >
                                        <i className="fas fa-bars"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row-col-4 logo"/>
                        <div className="row-col-6">
                            <div className="row header__topnav" id="main-menu">                                
                                <Link className="row-col-4 header__links header__links--hover" to="/">
                                    <i className="fas fa-chart-line"/>   DASHBOARD
                                </Link>                                 
                                <div className="dropdown row-col-2 header__links header__links--hover">
                                    <span>Mouse over me</span>
                                    <div className="dropdown-content">
                                        <Link to="/toggle">
                                            <i className="fas fa-spinner fa-pulse"/>   Toggle
                                        </Link>
                                        <Link to="/">
                                            <i className="fas fa-spinner fa-pulse"/>   TABLE
                                        </Link>
                                    </div>
                                </div>
                                <Link className="row-col-3 header__links header__links--hover" to="/toggle">
                                    <i className="fas fa-spinner fa-pulse"/>   Toggle
                                </Link>
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