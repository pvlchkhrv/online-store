import React, { createContext, ContextProvider } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DeviceStore from './store/DeviceStore';
import UserStore from './store/UserStore';

export const Context = createContext(null);

ReactDOM.render(
  <ContextProvider value={{
    user: new UserStore(),
    device: new DeviceStore(),
  }}>
    <App />
  </ContextProvider>,
  document.getElementById('root')
);
