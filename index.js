const  express = require('express')
const http=require('http')
const app = express()
const path = require('path')
const server = http.createServer(app)

app.use(express.static(path.resolve("./public")))


app.get('/', (req, res) => {
    res.sendFile("./public/index.html");
});

 
server.listen(9000, ()=> console.log('server starter at 9000 port')  )



