const socketio = require('socket.io')

const getRooms = () => {
    let myKeys = Object.keys(io.sockets.adapter.rooms).filter( function( element ) {
        return element.length < 6;
    });
    return myKeys
}

const getNamesFromRoom = room => {
    const nickname = []
    for (socketID in io.nsps['/'].adapter.rooms[room].sockets) {
        nickname.push(io.nsps['/'].connected[socketID].nickname);
    }
    return nickname
}

module.exports.listen = function(app) {
    io = socketio.listen(app)

    io.sockets.nickname = ''

    io.on("connection", (socket) => {
        console.log("New client connected");
        socket.on("disconnect", () => {
            console.log("Client disconnected")
        })

        //Room Code logic
        socket.on("room code", (data) => {
            console.log(data)
            socket.join(data.code, () => {
                socket.nickname = data.nickname
                console.log(getNamesFromRoom(data.code))
                socket.emit('add participant', getNamesFromRoom(data.code))
                //console.log(getRooms())
            })
        })

        //Delete Room
        socket.on("delete room", (data) => {
            socket.leave(data, () => {
                //console.log(getRooms())
            })
        })

        //Is the searched room valid
        socket.on("Is Room Valid?", (data) => {
            console.log(data)
            let validRoom = getRooms().indexOf(data)
            console.log(validRoom)

            //if it is valid
            if (validRoom !== -1) {
                socket.emit('room is valid', [])
            } else {
                //if it is not valid
                socket.emit('room is not valid', [])
            }
        })

        socket.on('send nickname', data => {
            socket.nickname = data.nickname
            socket.join(data.code, () => {
                console.log(getNamesFromRoom(data.code))
                socket.to(data.code).emit('add participant', getNamesFromRoom(data.code))
            })
            socket.emit()
        })
        
        //testing
        socket.emit('test', 'hello client')
        socket.on('test', () => {
            console.log('hello server')
        })
    })
}