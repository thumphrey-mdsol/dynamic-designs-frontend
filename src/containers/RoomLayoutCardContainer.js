import React from 'react';
import RoomLayoutCard from '../components/RoomLayoutCard'
import { Link } from 'react-router-dom';
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

    // This should route to roomEdit page
    getEachRoom = () => {
        return this.state.rooms.map(room => {
            return <RoomLayoutCard  key={room.id} {...room}>
                
            </RoomLayoutCard>
        })
    }

    render(){
        return(
                
            <Container>
                {this.getEachRoom()}
            </Container>

        )
    };
}

export default RoomLayoutCardContainer;