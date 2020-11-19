import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import EventPage from './pages/EventPage';
import EventsPage from './pages/EventsPage';
import ApplicationPage from './pages/ApplicationPage';
import ApplicationsPage from './pages/ApplicationsPage';
import UserPage from './pages/UserPage';
import UsersPage from './pages/UsersPage';
import HeroPage from './pages/HeroPage';
import HeroesPage from './pages/HeroesPage';
import HostPage from './pages/HostPage';
import HostsPage from './pages/HostsPage';
import NewUserPage from './pages/NewUserPage';
import SignInPage from './pages/SignInPage';
import SignOutPage from './pages/SignOutPage';
import NewEventPage from './pages.NewEventPage';
import NewApplicationPage from './pages/NewApplicationPage';
import ConfirmApplicationPage from './pages/ConfirmApplicationPage';
import UnauthPage from './pages/UnauthPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';


function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/events/:id">
            <EventPage />
          </Route>
          <Route path="/events">
            <EventsPage />
          </Route>
          <Route path="/applications/:id">
            <ApplicationPage />
          </Route>
          <Route path="/applications" exact>
            <ApplicationsPage />
          </Route>
          <Route path="/users/:id">
            <UserPage />
          </Route>
          <Route path="/users">
            <UsersPage />
          </Route>
          <Route path="/hero/:username">
            <HeroPage />
          </Route>
          <Route path="/heroes">
            <HeroesPage />
          </Route>
          <Route path="/host/:username">
            <HostPage />
          </Route>
          <Route path="/hosts">
            <HostsPage />
          </Route>
          <Route path="/newuser">
            <NewUserPage />
          </Route>
          <Route path="/signin">
            <SignInPage />
          </Route>
          <Route path="/signout">
            <SignOutPage />
          </Route>
          <Route path="/newevent">
            <NewEventPage />
          </Route>
          <Route path="/apply">
            <NewApplicationPage />
          </Route>
          <Route path="/confirmapplication">
            <ConfirmApplicationPage />
          </Route>
          <Route path="/unauthorised">
            <UnauthPage />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  ); 
}

export default App;
