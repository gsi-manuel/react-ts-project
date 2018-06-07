import React, { Component } from 'react';
import './App.scss';

const fontawesome = require('@fortawesome/fontawesome');
const solid = require('@fortawesome/fontawesome-free-solid').default;

fontawesome.library.add(solid);

import { Header } from './containers/common/header/Header';
import { Sidebar } from './containers/common/sidebar/Sidebar';
import { Content } from './containers/common/content/Content';
import { Footer } from './containers/common/footer/Footer';

export class App extends Component {

  render() {
    return(
      <div className="flex-class">
        <Header/>
        <div className="row flex-class__element">
          <Sidebar/>
          <Content/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
