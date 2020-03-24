import React from 'react';
import RoomLayoutCard from '../components/RoomLayoutCard'

import { Container } from 'semantic-ui-react'

class RoomLayoutCardContainer extends React.Component {


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
            return <RoomLayoutCard key={room.id} {...room} />
        })
    }

    render(){
        // console.log("main room page")
       
        return(
                
            <Container>
                {this.getEachRoom()}
            </Container>

        )
    };
}

export default RoomLayoutCardContainer;