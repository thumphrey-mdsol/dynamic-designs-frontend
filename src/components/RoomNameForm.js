import React from 'react';
import { Header, Card, Image, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class RoomNameForm extends React.Component {

    state = {
        roomName: ""
    }

    handleChange = (e) => {
        this.setState({roomName: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        e.persist()
        // Set name
    }

    render(){
      
        return(
                
            <div className="roomLayoutCardBuffer center">
            <Card >
                <form onSubmit={this.handleSubmit}>
                    <input name="Name" value={this.state.roomName} onChange={this.handleChange} placeholder="Name" type="text"/>
                    <button type="submit">Submit</button>
                </form>
            </Card>
            </div>

        )
    };
}

export default RoomNameForm;