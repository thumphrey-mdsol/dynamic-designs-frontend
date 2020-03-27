import React from 'react';
import SideNav from '../containers/SideNav'
import RoomContainer from '../containers/RoomContainer'
import { Image } from 'semantic-ui-react'

const initialState = 0
const headers = {'Content-Type': 'application/json'}

class RoomBuilderPage extends React.Component {

    state = {
        furnitures: [],
        placedFurniture: [],
        pickedUp: initialState 
    }

    componentDidMount(){
        fetch('http://localhost:3000/furnitures')
        .then(r=>r.json())
        .then(furnitures => this.setState({furnitures}))
        // should abstract fetch out but who got time for that
        fetch('http://localhost:3000/saved_rooms/52')
        .then(r=>r.json())
        .then(savedRoom => this.setState({savedRoom}))
    }


    clickOn = (e) => {
        e.persist()
        console.log(e.target.id)         
            this.setState({ pickedUp: e.target.id })
        console.log("setting state", this.state.pickedUp)
    }

    dropClick = (e) => {
        e.persist()
        // console.log(e.target)
        if(this.state.pickedUp){
            // console.log("checking state", this.state.pickedUp)

            // set state using id of furniture selected
            let idOfPickedUp = parseInt(this.state.pickedUp)
           let furniture = this.state.furnitures.find(furniture=> furniture.id === idOfPickedUp) 

            const coordinates = e.target.id.split(", ").map(num => parseInt(num))
            // set the saved_room and furniture ids to room_furniture
            const droppedFurniture = {saved_room_id: 52, furniture_id: furniture.id, x_coordinate: coordinates[0], y_coordinate: coordinates[1]}

            this.setState({placedFurniture: [...this.state.placedFurniture, droppedFurniture]})
            fetch('http://localhost:3000/room_furnitures', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(droppedFurniture)
            })
            // .catch(console.log)
            // .then(r=>r.json())
            // .then(furnitures => this.setState({furnitures}))
           this.setState({pickedUp: initialState})
        }
    }

    deleteFurniture = () => {
        fetch(`URL`, { method: "DELETE" })
    }
 
    render(){
        return(
            <div className="pageBuffer"> 
             <SideNav {...this.state} clickOn={this.clickOn} />
             <RoomContainer {...this.state} dropClick={this.dropClick} />
            
            </div>
        )
    }
}

export default RoomBuilderPage;