import React from 'react';
import RoomBuilderPage from './RoomBuilderPage'
import RoomLayoutCardContainer from '../containers/RoomLayoutCardContainer'



class HomePage extends React.Component {


    render(){
        console.log("main room page")
       
        return(
            
    
            <div>
                <RoomLayoutCardContainer />
            </div>

        )
    };
}

export default HomePage;