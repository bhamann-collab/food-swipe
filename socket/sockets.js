const socketio = require('socket.io')

const getRooms = () => {
    let myKeys = Object.keys(io.sockets.adapter.rooms).filter( function( element ) {
        return element.length < 6;
    });
    return myKeys
}

module.exports.listen = function(app) {
    io = socketio.listen(app)

    io.on("connection", (socket) => {
        console.log("New client connected");
        socket.on("disconnect", () => {
            console.log("Client disconnected")
        })

        //Room Code logic
        socket.on("room code", (data) => {
            socket.join(data, () => {
                console.log(getRooms())
            })
        })

        socket.on("search code", () => {
            console.log(roomCode)
        })
        
        //testing
        socket.emit('test', 'hello client')
        socket.on('test', () => {
            console.log('hello server')
        })
    })
}