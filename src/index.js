import React from 'react';
import ReactDom from 'react-dom';
import {ReactReduxContext} from 'react-redux';

import {loadFonts} from './fonts';

import App from 'components/layout/app';

import Renderer from 'services/renderer';

import {createStore} from 'store';

loadFonts(document.querySelector('.font-samples-container'));

const store = createStore();

const services = {};
services.renderer = new Renderer();

const ServiceContext = React.createContext(null);

ReactDom.render(
  <ReactReduxContext.Provider value={store}>
    <ServiceContext.Provider value={services}>
      <App />
    </ServiceContext.Provider>
  </ReactReduxContext.Provider>,
  document.querySelector('.app-wrapper')
);

export {ServiceContext};
