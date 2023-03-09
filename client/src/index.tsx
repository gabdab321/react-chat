import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux";
import {store} from "./redux/store";
import SocketContext from "./context/SocketContext";
import io from "socket.io-client";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <SocketContext.Provider value={{socket: io("http://localhost:3001")}}>
              <BrowserRouter>
                  <App/>
              </BrowserRouter>
          </SocketContext.Provider>
      </Provider>
  </React.StrictMode>
);