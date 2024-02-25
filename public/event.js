
    const socket = io()
    const messageInput = document.getElementById("message")
    const sendBtn = document.getElementById("sendBtn")
    const allMessages = document.getElementById('box')


    //message from backend
    socket.on('message', (message)=>{
        const p = document.createElement('p')
        p.innerText = message
        allMessages.appendChild(p)
    })

    sendBtn.addEventListener( "click", (e) => {
        const message = messageInput.value
        console.log(message)
        socket.emit('user-message', message)
    })

