import io, {Socket} from "socket.io-client";
import {createContext} from "react";

interface SocketContextType {
    socket: Socket
}

// @ts-ignore
const SocketContext = createContext<SocketContextType>()

export default SocketContext