import React from 'react';


class RoomContainer extends React.Component {

    makeGridBoxes = () => {
        for(let i = 0; i<100;i++){
            return <div>i</div>
        }
    }

    render(){
        // console.log("RoomContainer page")
        return(
            <div className="roomSandbox">
                <div className="roomTiles">1</div>
                <div className="roomTiles">2</div>
                <div className="roomTiles">3</div>
                <div className="roomTiles">4</div>
                <div className="roomTiles">5</div>
                <div className="roomTiles">6</div>
                <div className="roomTiles">7</div>
                <div className="roomTiles">8</div>
                <div className="roomTiles">9</div>
                <div className="roomTiles">10</div>
                <div className="roomTiles">11</div>
                <div className="roomTiles">12</div>
                <div className="roomTiles">13</div>
                <div className="roomTiles">14</div>
                <div className="roomTiles">15</div>
                <div className="roomTiles">16</div>
                <div className="roomTiles">17</div>
                <div className="roomTiles">18</div>
                <div className="roomTiles">19</div>
                <div className="roomTiles">20</div>
                <div className="roomTiles">21</div>
                <div className="roomTiles">22</div>
                <div className="roomTiles">23</div>
                <div className="roomTiles">24</div>
                <div className="roomTiles">25</div>
                <div className="roomTiles">26</div>
                <div className="roomTiles">27</div>
                <div className="roomTiles">28</div>
                <div className="roomTiles">29</div>
                <div className="roomTiles">30</div>
                
                {/* {for(let i = 0; grid.length > i; i++){
                    for(let j = 0; grid[0].length > j; j++){
                    let newEle = document.createElement("div")
                    grid[i][j] = " "
                    newEle.setAttribute("class", "element")
                    newEle.innerText = grid[i][j]
                    newEle.id = `${i}_${j}`
                    document.querySelector(`#${gridType}-grid`).appendChild(newEle)
                }}
                } */}
            </div>
        )
    }
}

export default RoomContainer;