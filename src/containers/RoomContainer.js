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
                <div className="item">1</div>
                <div className="item">2</div>
                <div className="item">3</div>
                <div className="item">4</div>
                <div className="item">5</div>
                <div className="item">6</div>
                <div className="item">7</div>
                <div className="item">8</div>
                <div className="item">9</div>
                <div className="item">10</div>
                <div className="item">11</div>
                <div className="item">12</div>
                <div className="item">13</div>
                <div className="item">14</div>
                
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