import React from 'react';
import { Header, Card, Image, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class RoomLayoutCard extends React.Component {



    render(){
      console.log(this.props)
        return(
                
            <div className="roomLayoutCardBuffer center">
                <Card onClick={() => this.props.history.push("/name_form")}>
                    <Header center as='h1'>{this.props.category} </Header> 
                    <Image center url={this.props.url} size='medium' />
                    <Divider hidden />
                    <Link to="/room_builder_page"/>
                </Card>
            </div>

        )
    };
}

export default RoomLayoutCard;

