import React from 'react';
import "./styles/App.scss"
import AppRouter from "./components/AppRouter";
import io from "socket.io-client";

function App() {
    return (
        <div className="App">
            <AppRouter/>
        </div>
    );
}

export default App;
