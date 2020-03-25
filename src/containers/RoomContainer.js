import React from 'react';


class RoomContainer extends React.Component {

    makeGridBoxes = () => {
        let grid = []
        for(let i = 0; i<10;i++){
            for( let j=0; j<10; j++){
                grid.push(<div onClick={this.props.dropClick } className="roomTiles" id={`${i}, ${j}`}></div> )
            }
        }
        return grid
    }



    render(){
        // console.log("RoomContainer page")
        return(
            <div className="roomSandbox">
                {this.makeGridBoxes()}
 
            
            </div>
        )
    }
}

export default RoomContainer;