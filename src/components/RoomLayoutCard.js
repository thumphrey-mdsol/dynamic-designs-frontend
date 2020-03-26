import React from 'react';
import { Header, Card, Image, Divider } from 'semantic-ui-react'


class RoomLayoutCard extends React.Component {



    render(){
      
        return(
                
            <Card >
                <div >
                <Header as='h1'>{this.props.category} </Header> 
                <Image src={this.props.category} size='medium' />
                <Divider hidden />
                </div>
                
            </Card>

        )
    };
}

export default RoomLayoutCard;

