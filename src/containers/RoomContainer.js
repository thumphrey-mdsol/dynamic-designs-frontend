import React from 'react';
import styled from 'styled-components';
import RoomNameForm from '../components/RoomNameForm';

class RoomContainer extends React.Component {
    // this.props.savedRoom.name ? this.props.savedRoom.name : "";
    state = {
        roomName: ""
    }

    handleChange = (e) => {
        this.setState({roomName: e.target.value})
        console.log(this.state.roomName)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        e.persist()
        console.log("we did it!", e, this.state.roomName)
        // if (this.props.savedRoom.name){
        //     // update
        // } else {
        //     // post
        // }
        // let newName = {...this.props.savedRoom, name:this.state.newName}
        // fetch(`http://localhost:3000/saved_rooms/${this.props.savedRoom.id}`, {
        //     method: "PATCH",
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(newName)
        // })
    }
    
    makeGridBoxes = () => {
        let grid = []
        for(let i = 0; i<10;i++){
            for( let j=0; j<10; j++){
                grid.push(<div onClick={this.props.dropClick } className="roomTiles" id={`${i}, ${j}`}></div>)
            }
        }
        return grid
    }

    renderFurniture = (roomFurniture) => {
        console.log(roomFurniture)
        // find furniture by id to get length and width
        const selectedFurniture = this.props.furnitures.find(furniture => furniture.id === roomFurniture.furniture_id)
        // debugger
        console.log(selectedFurniture)
        // find savedFurniture
        return <PlacedFurniture x={roomFurniture.x_coordinate} y={roomFurniture.y_coordinate} width={selectedFurniture.width} length={selectedFurniture.length}>
        <img src={selectedFurniture.img} alt={selectedFurniture.name} />
        </PlacedFurniture>
    }

    render(){
        console.log(this.props.savedRoom.room_furnitures)
        return(
            <div>
                <div>
                    <h1>{this.props.savedRoom.name}</h1>
                    <RoomNameForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} {...this.state}/>
                </div>
                <div className="roomSandbox">
                    {this.makeGridBoxes()}
                    {/* {this.props.savedRoom.room_furnitures && this.props.furnitures && this.props.savedRoom.room_furnitures.map(furniture => this.renderFurniture(furniture))} */}
                </div>
                <div>
                    <button  onClick class="ui primary button " >Save Room</button>
                </div>
            </div>
        )
    }
}
// furnitures.filter(furniture => furniture.x_coordinate && furniture.y_coordinate)

const PlacedFurniture = styled.div`
    grid-column: ${props => props.x} / ${props => props.x + props.width};
    grid-row: ${props => props.y} / ${props => props.y + props.length};
`

export default RoomContainer;