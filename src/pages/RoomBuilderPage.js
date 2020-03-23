import React from 'react';
import SideNav from '../containers/SideNav'
import RoomContainer from '../containers/RoomContainer'



class RoomBuilderPage extends React.Component {

    state = {
        furnitures: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/furnitures')
        .then(r=>r.json())
        .then(furnitures => this.setState({furnitures}))
    }
 
    render(){
        console.log("RoomBuilderPage page")
        return(
            <div> 
             <SideNav {...this.state} />
             <RoomContainer {...this.state} />
            
            </div>
        )
    }
}

export default RoomBuilderPage;