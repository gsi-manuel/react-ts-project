import React, { Component } from 'react';

import './Toggle.scss';

interface IChecked {
    isToggleOn: boolean;
}
export class Toggle extends Component<{}, IChecked> {
    constructor(props: any) {
        super(props);

        this.state = {
            isToggleOn: true
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    }

    render() {
        const style = {
            'display': 'none'
        };

        return (
            <div>
                <h1>Toggle</h1>
                <h1>{JSON.stringify(this.state.isToggleOn)}</h1>
                <label className="toggle">
                    <input 
                        type="checkbox" 
                        defaultChecked={true}
                        style={style}
                        onChange={this.handleChange}
                    />
                    <span className="toggle__slider">
                        <span className="toggle__on">ON</span>
                        <span className="toggle__off">OFF</span>
                    </span>
                </label>
                <label className="toggle">
                    <input 
                        type="checkbox" 
                        defaultChecked={true}
                        style={style}
                    />
                    <span className="toggle__slider toggle__slider--danger">
                        <span className="toggle__on">YES</span>
                        <span className="toggle__off">NO</span>
                    </span>
                </label>
                <label className="toggle">
                    <input 
                        type="checkbox" 
                        defaultChecked={true}
                        style={style}
                    />
                    <span className="toggle__slider toggle__slider--success">
                        <span className="toggle__on">YES</span>
                        <span className="toggle__off">NO</span>
                    </span>
                </label>
            </div>
        );
    }
}

export default Toggle;