import * as React from 'react';
import './Content.scss';

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
                    <div className="table">
                        <div className="table__header row">
                            <div className="row-col-1">ID</div>
                            <div className="row-col-3">NAME</div>
                            <div className="row-col-3">PROVINCE</div>
                            <div className="row-col-3">IDENTIFICATION</div>
                            <div className="row-col-2">ACTIONS</div>
                        </div>                    
                        <div className="table__row row">
                            <div className="row-col-1"><span>1</span></div>
                            <div className="row-col-3">Yoan Manuel</div>
                            <div className="row-col-3">Sancti Spiritus</div>
                            <div className="row-col-3">85022515842</div>
                            <div className="row-col-2">actions</div>
                        </div>                  
                        <div className="table__row row">
                            <div className="row-col-1"><span>2</span></div>
                            <div className="row-col-3">Lissa Curbelo</div>
                            <div className="row-col-3">Mayabeque</div>
                            <div className="row-col-3">85022515842</div>
                            <div className="row-col-2">ACTIONS</div>
                        </div>                   
                    </div>
                    <div className="radio">
                        <input id="radio-1" name="radio" type="radio"/>
                        <label htmlFor="radio-1" className="radio-label">Checked</label>
                    </div>
                    <div className="radio">
                        <input id="radio-2" name="radio" type="radio" />
                        <label htmlFor="radio-2" className="radio-label">Unchecked</label>
                    </div>
                    <div className="radio">
                        <input id="radio-3" name="radio" type="radio" disabled={true} />
                        <label htmlFor="radio-3" className="radio-label">Disabled</label>
                    </div>
                    <div>
                        <input value={this.state.name} onChange={(event) => this.change(event)} />
                        <p>Hello {this.state.name}!</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Content;