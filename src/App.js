import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import EventsPage from './pages/EventsPage';
import EventPage from './pages/EventPage';
import NewEventForm from './components/Forms/NewEventForm';


function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route path='/events' exact>
            <EventsPage />
          </Route>
          <Route path='/events/:id'>
            <EventPage />
          </Route>
          <Route path='/new'>
            <NewEventForm />
          </Route>
          <Route path="/" exact>
            <EventsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  ) 
}

export default App;

// comment for commit