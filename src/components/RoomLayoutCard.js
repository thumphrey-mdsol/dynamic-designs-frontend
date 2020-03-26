import React from 'react';
import { Header, Card, Image, Divider } from 'semantic-ui-react'


class RoomLayoutCard extends React.Component {



    render(){
      
        return(
                
            <div className="roomLayoutCardBuffer center">
            <Card >
                <Header center as='h1'>{this.props.category} </Header> 
                <Image center url={this.props.url} size='medium' />
                <Divider hidden />
                
                
            </Card>
            </div>

        )
    };
}

export default RoomLayoutCard;

