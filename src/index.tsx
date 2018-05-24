import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// ReactDOM.render(
//     <BrowserRouter> 
//         <App />
//     </BrowserRouter>,
//     document.getElementById('root')
// );

const renderApp = (A: React.ComponentClass) => {
    ReactDOM.render(
        <BrowserRouter>
            <A />
        </BrowserRouter>, 
        document.getElementById('root'));
};

// const ro = document.getElementById('root');
renderApp( App);

if ((module as any).hot) {
    (module as any).hot.accept();
}
