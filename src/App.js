
import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import Nav from './components/Nav';
import MainRoomPage from './containers/MainRoomPage';
// import Room from '../containers/Room';
// import RoomIndex from '../containers/RoomIndex';



const App = (props) => {
  return (
    <Router>
      <div className="app">
        <Nav />
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route exact path="/main_room_page" component={MainRoomPage} />
        <Route exact path="/room" component={Room} />
        <Route exact path="/room_index" component={RoomIndex} /> */}
      <MainRoomPage />
      </div>
    </Router>
  );
};

export default App
