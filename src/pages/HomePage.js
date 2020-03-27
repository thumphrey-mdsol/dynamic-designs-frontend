// import React from 'react';
import React, { Component } from 'react'
import RoomBuilderPage from './RoomBuilderPage'
import RoomLayoutCardContainer from '../containers/RoomLayoutCardContainer'


import {Button} from 'semantic-ui-react'
import { Container, Image, Header } from 'semantic-ui-react'



class HomePage extends Component  {
 
    render () {

        return(                    
            
            <div >
                 
                <RoomLayoutCardContainer />
            </div> 
                
            )
        }
    
}

export default HomePage;