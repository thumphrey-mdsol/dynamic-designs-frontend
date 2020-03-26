import React from 'react';
 /** CARYN NOTE START HERE  */
 // NEED TO INSTALL STYLED-COMPONENTS FOR THIS TO WORK
import styled from 'styled-components';
 /** CARYN NOTE END HERE  */


class RoomContainer extends React.Component {

    makeGridBoxes = () => {
        // 10 x 10 base boxes for the grid 
        let grid = []
        for(let i = 0; i<10;i++){
            for( let j=0; j<10; j++){
                grid.push(<img onClick={this.props.dropClick } className="roomTiles" id={`${i}, ${j}`}/>)
            }
        }
        return grid
    }



    render(){
        // console.log("RoomContainer page")
        return(
            <div>
                {/* <h1>{this.props.furnitures.rooms.name}</h1> */}
                <h1 className="float_left" >Get Rooms Name Here</h1>
                <div className="roomSandbox">
                    {this.makeGridBoxes()}
                    { /** CARYN NOTE START HERE  
                     * filtering to only get the furniture that have been placed and then mapping
                     * using styled components to define its location on the grid, hopefully overlapping the grid boxes
                    */}
                    {this.props.furnitures.filter(furniture => furniture.x && furniture.y)}.map(furniture => (
                        <PlacedFurniture x={furniture.x} y={furniture.y} width={furniture.width} height={furniture.height}>
                            <img src={furniture.img} alt={furniture.name} />
                        </PlacedFurniture>
                    ))
                    {/** CARYN NOTE END HERE  */}
                </div>
                <div>
                    <button  onClick class="ui primary button">Save Room</button>
                </div>
            </div>
        )
    }
}

/* CARYN NOTE START HERE */
// styled components can take props and use anonymous functions to calculate the css style values 
// check out the MDN one of the resources I sent you to check out the css properties i'm using
const PlacedFurniture = styled.div`
    grid-column: ${props => props.x} / ${props => props.x + props.width};
    grid-row: ${props => props.y} / ${props => props.y + props.height};
`

export default RoomContainer;