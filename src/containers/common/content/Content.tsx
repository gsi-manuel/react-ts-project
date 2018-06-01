import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Content.scss';
import { Table } from '../../../components/common/table/Table';
import { Radio } from '../../../components/common/radio/Radio';
import { Login } from '../../../components/common/login/Login';
import { Toggle } from '../../../components/common/toggle/Toggle';

export class Content extends React.Component {

    render() {
        return (
            <div className="row-col-9">
                <div className="main-content">
                    <Switch>
                        <Route exact={true} path="/" component={Table}/>
                        <Route path="/radio" component={Radio}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/toggle" component={Toggle}/>
                    </Switch> 
                </div>
            </div>
        );
    }

}

export default Content;