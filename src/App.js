
import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import Nav from './containers/Nav';
import HomePage from './pages/HomePage';
import RoomBuilderPage from './pages/RoomBuilderPage';
import UsersRooms from './pages/UsersRooms';



class App extends React.Component {
  render(){


    return (
      <Router>
        <div className="app">
          <Nav />
            <Switch >
              <Route path="/home_page" component={HomePage} />
              <Route exact path="/room_builder_page" component={RoomBuilderPage} />
              <Route exact path="/users_rooms" component={UsersRooms} />
          
              <Route exact path="/" component={HomePage} />
            </Switch>
        </div>
      </Router>
    );
  }
};

export default App
