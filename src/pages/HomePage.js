// import React from 'react';
import React, { Component } from 'react'
import RoomBuilderPage from './RoomBuilderPage'
import RoomLayoutCardContainer from '../containers/RoomLayoutCardContainer'


import {Button} from 'semantic-ui-react'
import { Container, Image, Header } from 'semantic-ui-react'



// class HomePage extends React.Component () {
class HomePage extends Component  {
 
        // console.log("main room page")
    render () {

        return(                    
            
            <div>
                 
                <RoomLayoutCardContainer />
            </div> 
                
            )
        }
    
}

export default HomePage;