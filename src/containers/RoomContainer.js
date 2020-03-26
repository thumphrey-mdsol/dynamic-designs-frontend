import React from 'react';


class RoomContainer extends React.Component {

    makeGridBoxes = () => {
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
                </div>
                <div>
                    <button  onClick class="ui primary button " >Save Room</button>
                </div>
            </div>
        )
    }
}

export default RoomContainer;