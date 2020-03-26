import React from 'react';
import SideNav from '../containers/SideNav'
import RoomContainer from '../containers/RoomContainer'
import { Image } from 'semantic-ui-react'

const initialState = 0

class RoomBuilderPage extends React.Component {

    state = {
        furnitures: [],
        pickedUp: initialState 
    }

    componentDidMount(){
        fetch('http://localhost:3000/furnitures')
        .then(r=>r.json())
        .then(furnitures => this.setState({furnitures}))
    }


    clickOn = (e) => {
        e.persist()
        // console.log(e.target.id)         
            this.setState({ pickedUp: e.target.id })
        console.log("setting state", this.state.pickedUp)
    }

    dropClick = (e) => {
        e.persist()
        if(this.state.pickedUp){
            console.log("checking state", this.state.pickedUp)

         /// grab id of what was in pickedUp
         // grab index of block that was clicked
         // grab img url of id in state
         // place id of pickedup into index
         let idOfPickedUp = parseInt(this.state.pickedUp)
         
           let furniture = this.state.furnitures.find(furniture=> furniture.id === idOfPickedUp) 
        // let furniture = this.state.furnitures
           console.log("finding furniture", furniture)
           let furnitureImg = furniture.image_url


           e.target.src=furnitureImg
           
        //    return <img src={furnitureImg}/>

        //    src={this.props.furniture.image_url} 
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