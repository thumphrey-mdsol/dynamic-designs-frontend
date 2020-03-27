import React from 'react';
import { Divider, Image } from 'semantic-ui-react'


class FurnitureCard extends React.Component {

  
    render(){
        return(
            <div onClick={this.props.clickOn } id={this.props.furniture.id} className=""> 
                {this.props.furniture.product_name}
                <Image 
                    style={{"height" : "40px", "width" : "40px"}} 
                    id={this.props.furniture.id} 
                    src={this.props.furniture.image_url} 
                    size='tiny' />
            </div>
        )
    }
}

export default FurnitureCard;
