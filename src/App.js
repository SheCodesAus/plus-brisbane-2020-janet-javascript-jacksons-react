import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EventPage from './pages/EventPage';
import EventsPage from './pages/EventsPage';
import UserPage from './pages/UserPage';
import UsersPage from './pages/UsersPage';
// import HeroPage from './pages/HeroPage';
// import HeroesPage from './pages/HeroesPage';
// import HostPage from './pages/HostPage';
// import HostsPage from './pages/HostsPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import SignOutPage from './pages/SignOutPage';
import BecomeHeroPage from './pages/BecomeHeroPage';
import BecomeHostPage from './pages/BecomeHostPage';
import NewEventPage from './pages/NewEventPage';
import UnauthPage from './pages/UnauthPage';
// import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import Footer from './components/Nav/Footer';
import ApplicationsPage from './pages/ApplicationsPage';
import NewApplicationForm from './components/Forms/NewApplicationForm';


function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/events/:id">
            <EventPage />
          </Route>
          <Route path="/events">
            <EventsPage />
          </Route>
          <Route path="/users/:id">
            <UserPage />
          </Route>
          <Route path="/users">
            <UsersPage />
          </Route>
          {/* <Route path="/hero/:username">
            <HeroPage />
          </Route> */}
          {/* <Route path="/heroes">
            <HeroesPage />
          </Route> */}
          {/* <Route path="/host/:username">
            <HostPage />
          </Route> */}
          {/* <Route path="/hosts">
            <HostsPage />
          </Route> */}
          <Route path="/becomehero">
            <BecomeHeroPage />
          </Route>
          <Route path="/becomehost">
            <BecomeHostPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
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
          <Route path="/unauthorised">
            <UnauthPage />
          </Route>
          <Route path='/applications' exact>
            <ApplicationsPage />
          </Route>
          <Route path='/apply'>
            <NewApplicationForm />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
          {/* <Route component={ErrorPage} /> */}
        </Switch>

        <Footer />
      </div>
    </Router>
  ); 
}

export default App;
