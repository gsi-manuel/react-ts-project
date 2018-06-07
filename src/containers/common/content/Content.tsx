import * as React from 'react';
import { RiftGate } from 'rift-router';
import './Content.scss';

export class Content extends React.Component {

    render() {
        return (
            <div className="row-col-9">
                <div className="main-content">
                    <RiftGate/>
                </div>
            </div>
        );
    }

}

export default Content;