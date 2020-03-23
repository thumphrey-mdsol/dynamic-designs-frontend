import React from 'react';
import FurnitureCard from '../components/FurnitureCard'


class SideNav extends React.Component {

    renderFurniture = () => {
        return this.props.furnitures.map(furniture => {
            return <FurnitureCard furniture={furniture} key={furniture.id} />
        })
    }
  
    render(){
        // console.log("SideNav page")
        return(
            <div> 
                {this.renderFurniture()}
            </div>
        )
    }
}

export default SideNav;