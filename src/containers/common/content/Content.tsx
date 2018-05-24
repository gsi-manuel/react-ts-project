import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Content.scss';
import { Table } from '../../../components/table/Table';
import { Radio } from '../../../components/radio/Radio';
import { Login } from '../../../components/login/Login';

interface IState {
    name: string;
}

export class Content extends React.Component <any, IState> {
    constructor(props: any) {
        super(props);
        this.state = { name: 'Bruce' };
    }
    
    change(event: any) {
        this.setState({ name: event.target.value });
    }
    
    render() {
        return (
            <div className="row-col-9">
                <div className="main-content">
                    <Switch>
                        <Route exact={true} path="/" component={Table}/>
                        <Route path="/radio" component={Radio}/>
                        <Route path="/login" component={Login}/>
                    </Switch> 
                </div>
            </div>
        );
    }

}

export default Content;