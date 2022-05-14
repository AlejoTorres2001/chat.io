import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './main.css'
import {RecoilRoot} from "recoil";
import { SocketProvider } from './providers/SocketProvider';
ReactDOM.render(
  <React.StrictMode>
    <SocketProvider>
    <RecoilRoot>
    <App />
    </RecoilRoot>
    </SocketProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
