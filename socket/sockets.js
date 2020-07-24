const socketio = require('socket.io')

module.exports.listen = function(app) {
    io = socketio.listen(app)

    io.on("connection", (socket) => {
        console.log("New client connected");
        socket.on("disconnect", () => {
            console.log("Client disconnected")
        })

        //Room Code logic
        let roomCode
        socket.on("room code", (data) => {
            console.log(data)
        })
        
        socket.emit('test', 'hello client')
    })
}