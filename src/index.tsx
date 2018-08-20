import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import router from './routes/routes';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

const stores = {
    router: router
};

const renderApp = (A: React.ComponentClass) => {
    ReactDOM.render(
        <Provider {...stores}>
            <A />
        </Provider>, 
        document.getElementById('root'));
    // registerServiceWorker();
};

renderApp( App);

if ((module as any).hot) {
    (module as any).hot.accept();
}
