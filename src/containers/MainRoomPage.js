import React from 'react';
import Room from './Room'


class MainRoomPage extends React.Component {

    state = {
        rooms: []
    }

    componentDidMount = () => {
        fetch('http://localhost:3000/rooms')
        .then(r=>r.json())
        .then(rooms => this.setState({rooms}))
    }

    getEachRoom = () => {
        return this.state.rooms.map(room => {
            return <Room key={room.id} {...room} />
        })
    }

    render(){
        console.log("main room page")
        return(
            <div>
                {this.getEachRoom()}
            </div>
        )
    }
}

export default MainRoomPage;