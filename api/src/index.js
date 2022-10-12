import express from "express";
import cors from "cors";
import { Server } from 'socket.io'
import http from 'http'
import "dotenv/config";
import userController from "./Controller/userController.js"
import medicController from "./Controller/medicController.js"

const app = express()
const server = http.createServer(app)
const sockets =  new Server(server)
const router = express();

router.use(cors());
router.use(express.json());
router.use(userController);
router.use(medicController);
router.listen(process.env.PORT, () => console.log(`Server online on PORT: ${process.env.PORT}`));

const state = {
    members: [],
    messages: []
}


sockets.on('connection', socket => {
    console.log('> Connected, ID:', socket.id)
    socket.emit('setup', state)

    socket.once('reply-setup', nick => {
        let newMember = {
            nick: nick,
            id: socket.id
        }
        state.members.push(newMember)

        socket.on('message', msg => {
            console.log(`Msg: ${msg} | From: ${newMember.id}`)

            let newMsg = {
                from: socket.id,
                content: msg
            }

            state.messages.push(newMsg)

            sockets.emit('new-message', newMsg)
        })
    })
})
server.listen(3000, () => {console.log(`> Online | Port: 3000`)
})