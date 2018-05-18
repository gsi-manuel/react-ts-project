import React, { Component } from 'react';
import './Header.scss';

export class Header extends Component {
    render() {
        return (
            <div className="row">
                <div className="row-col-12">
                    <div className="row header">
                        <div className="row-col-3 logo">LOGO</div>
                        <div className="row-col-3 logo"/>
                        <div className="row-col-6">
                            <div className="row">
                                <a className="row-col-3 header__links header__links--hover" href="#">
                                    Link
                                </a>
                                <a className="row-col-3 header__links header__links--hover" href="#">Link</a>
                                <a className="row-col-3 header__links header__links--hover" href="#">Link</a>
                                <a className="row-col-3 header__links header__links--hover" href="#">Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;