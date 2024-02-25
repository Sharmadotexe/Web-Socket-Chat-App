const  express = require('express')
const http=require('http')
const app = express()
const path = require('path')
const { Server } = require("socket.io");
const server = http.createServer(app)
const io = new Server(server)


//socket.io 
io.on('connection', (socket) =>{
    socket.on('user-message', (message)=>{
        io.emit('message', (message))
})   
})  


app.use(express.static(path.resolve("./public")))




app.get('/', (req, res) => {
    res.sendFile("./public/index.html");
});

 
server.listen(9000, ()=> console.log('server starter at 9000 port')  )



