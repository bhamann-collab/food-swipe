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

        //Delete Room
        socket.on("delete room", (data) => {
            socket.leave(data, () => {
                console.log(getRooms())
            })
        })

        //Is the searched room valid
        socket.on("Is Room Valid?", (data) => {
            console.log(data)
            let validRoom = getRooms().indexOf(data)
            console.log(validRoom)

            //continuing
            if (validRoom !== -1) {
                socket.emit('room is valid', "test")
            }
        })
        
        //testing
        socket.emit('test', 'hello client')
        socket.on('test', () => {
            console.log('hello server')
        })
    })
}