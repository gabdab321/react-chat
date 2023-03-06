const express = require("express")
const http = require("http")
const {Server} = require("socket.io")
const cors = require("cors")
const moment = require("moment")

const app = express()

app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

io.on("connection", socket => {
    socket.on("send_message", data => {
        let {message, room} = data
        message = {...message, date: moment(message.date)}
        socket.to(room).emit("receive_message", message)
    })

    socket.on("join", room => {
        socket.join(room)
    })
})

server.listen(3001, () => {
    console.log("SERVER IS RUNNING")
})