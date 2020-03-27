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

         /// grab id of what was in pickedUp
         // grab index of block that was clicked
         // grab img url of id in state
         // place id of pickedup into index
            let idOfPickedUp = parseInt(this.state.pickedUp)
         
           let furniture = this.state.furnitures.find(furniture=> furniture.id === idOfPickedUp) 
        // let furniture = this.state.furnitures
        //    console.log("finding furniture", furniture)
        //    let furnitureImg = furniture.image_url
        //    e.target.src=furnitureImg
        //    return <img src={furnitureImg}/>
        //    src={this.props.furniture.image_url} 

            const coordinates = e.target.id.split(", ").map(num => parseInt(num))
            // set the saved_room and furniture ids to room_furniture
            const droppedFurniture = {room_id: 52, furniture_id: furniture.id, x_coordinate: coordinates[0], y_coordinate: coordinates[1]}

            this.setState({placedFurniture: [...this.state.placedFurniture, droppedFurniture]})
            // fetch('http://localhost:3000/room_furnitures', {
            //     method: "POST",
            //     headers,
            //     body: JSON.stringify(droppedFurniture)
            // })
            // .catch(console.log)
            // .then(r=>r.json())
            // .then(furnitures => this.setState({furnitures}))

            // SEPERATE FETCH set state with saved furniture id's

           this.setState({pickedUp: initialState})

        }
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