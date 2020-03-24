import React from 'react';
import { Header, Card, Image, Divider } from 'semantic-ui-react'


class RoomLayoutCard extends React.Component {



    render(){
      
        return(
                
            <Card >
                <div >
                <Header as='h1'>{this.props.category} </Header> 
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSw_s2ZM9ORlp48nzcGqibvgw-2CsxT5Rbm3IQHkeUIIdg_lTXq" size='medium' />
                <Divider hidden />
                </div>
                
            </Card>

        )
    };
}

export default RoomLayoutCard;

