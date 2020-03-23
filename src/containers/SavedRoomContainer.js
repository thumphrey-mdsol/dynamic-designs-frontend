import React from 'react';
import SavedRoomCard from '../components/SavedRoomCard'

class SavedRoomContainer extends React.Component {

    state = {
        savedRooms: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/saved_rooms')
        .then(r=>r.json())
        .then(savedRooms => this.setState({savedRooms}))
    }

    renderSavedRooms = () => {
        return this.state.savedRooms.map(room => {
            return <SavedRoomCard {...room} key={room.id} />
        })
    }
 
    render(){
        
        return(
            <div> 
                {this.renderSavedRooms()}          
            </div>
        )
    }
}

export default SavedRoomContainer;