import * as React from 'react';

export class Table extends React.Component {
    
    render() {
        return (
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

        );
    }

}

export default Table;