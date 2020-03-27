import React from 'react';
import styled from 'styled-components';
import RoomNameForm from '../components/RoomNameForm';


class RoomContainer extends React.Component {
    xCoord = this.props.placed
    yCoord = this.props
    makeGridBoxes = () => {
        let grid = []
        for(let i = 0; i<10;i++){
            for( let j=0; j<10; j++){
                grid.push(<div onClick={this.props.dropClick } className="roomTiles" id={`${i}, ${j}`}></div>)
            }
        }
        return grid
    }

    renderFurniture = (furniture) => {
        console.log(furniture)
        // // find furniture by id to get length and width
        // const selectedFurniture = this.props.furniture.find(furniture => furniture.id === furniture.furniture_id)
        // // find savedFurniture
        // return <PlacedFurniture x={furniture.x_coordinate} y={furniture.y_coordinate} width={selectedFurniture.width} length={selectedFurniture.length}>
        // <img src={selectedFurniture.img} alt={selectedFurniture.name} />
        // </PlacedFurniture>
    }

    render(){
        return(
            <div>
                <RoomNameForm/>
                <div className="roomSandbox">
                    {this.makeGridBoxes()}
                    {this.savedRoom.room_furnitures ? this.savedRoom.room_furnitures.map(furniture => this.renderFurniture(furniture)):null}
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