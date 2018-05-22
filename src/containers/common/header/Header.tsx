import React, { Component } from 'react';
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
                                <a className="row-col-3 header__links header__links--hover" href="#">
                                 <i className="fas fa-chart-line"/>   DASHBOARD
                                </a>
                                <a className="row-col-3 header__links header__links--hover" href="#">
                                    <i className="fas fa-user"/>   users
                                </a>
                                <a className="row-col-3 header__links header__links--hover" href="#">
                                <i className="fas fa-spinner fa-pulse"/>   Spinner
                                </a>
                                <a className="row-col-2 header__links header__links--hover" href="#">Link</a>
                                <a className="row-col-1 header__links header__links--hover" href="#">
                                    <i className="fas fa-power-off"/>
                                </a>
                                                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;