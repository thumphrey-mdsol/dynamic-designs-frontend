import React from 'react';
import FurnitureCard from '../components/FurnitureCard'


class SideNav extends React.Component {

    renderFurniture = () => {
        
        return this.props.furnitures.map(furniture => {
            return <FurnitureCard furniture={furniture} key={furniture.id} className="sideNavFurniture"/>
        })
    }
  
    render(){
        return(
            <div  id="furnitureContainer" > 
                {this.renderFurniture()}
            </div>
        )
    }
}

export default SideNav;