import * as React from 'react';
import axios from 'axios';
import { Spinner } from '../../components/common/spinner/Spinner';
interface IRadio {
    checked: boolean;
    username: string;
    loading: boolean;
}
export class Radio extends React.Component <{}, IRadio> {

    constructor(props: any) {
        super(props);

        this.state = {
            checked: true,
            username: 'new',
            loading: true
        };
        // axios.get('https://api.github.com/users/gsi-manuel')
        // .then(response => {
        //     //   console.log(response);
        //     this.setState({
        //         username: response.data.name
        //     });
        // })
        // .then(() => {
        //     setTimeout(() => this.setState({ loading: false }), 1500);
        // });
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/gsi-manuel')
        .then(response => {
            //   console.log(response);
            this.setState({
                username: response.data.name,
                // loading: false
            });
            setTimeout(() => this.setState({ loading: false }), 1500);
        });
        // .then(() => {
        //     setTimeout(() => this.setState({ loading: false }), 1500);
        // });
    }
    
    render() {
        // const { loading } = this.state;
    
        // if (loading) { // if your component doesn't have to wait for an async action, remove this block 
        //     return <Spinner/>; // render null when app is not ready
        // }
        let content;

        if (this.state.loading) {
            content = <Spinner/> ;
        } else { 
            content = (
                <div>
                    <h1>{this.state.username}</h1>
                    <div className="radio">
                        <input id="radio-1" name="radio" type="radio" defaultChecked={true}/>
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
                </div>
                );
        }
        return (<div>{content}</div> );
                       
        // )
    }

}

export default Radio;