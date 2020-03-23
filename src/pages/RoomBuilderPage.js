import React from 'react';
// import RoomIndex from './RoomIndex'
import SideNav from '../containers/SideNav'


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
            "ji"
            // <SideNav {...this.state} />
        )
    }
}

export default RoomBuilderPage;