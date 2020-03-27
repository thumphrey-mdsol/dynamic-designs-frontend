import React from 'react';
import { Header, Card, Image, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class RoomNameForm extends React.Component {

    render(){
      
        return(
                
            <div className="roomLayoutCardBuffer center">
            <Card >
                <form onSubmit={this.props.handleSubmit}>
                    <input name="Name" value={this.props.roomName} onChange={this.props.handleChange} placeholder="Name" type="text"/>
                    <button type="submit">Submit</button>
                </form>
            </Card>
            </div>

        )
    };
}

export default RoomNameForm;