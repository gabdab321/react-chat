import React from 'react';
import "./styles/App.scss"
import io from "socket.io-client"
import AppRouter from "./components/AppRouter";
import moment from 'moment';

//@ts-ignore
const socket = io.connect("http://localhost:3001")

function App() {
    return (
        <div className="App">
            <AppRouter/>
        </div>
    );
}

export default App;
