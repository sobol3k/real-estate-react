import React from 'react';
import {Route, Switch} from 'react-router-dom'
import MainPage from '../components/main/MainPage';
import AboutPage from '../components/main/AboutPage';
import Contact from '../components/main/Contact';
import Error from '../components/main/Error';
import Management from '../components/main/Management';
import Agents from '../components/main/RealEstateAgents';
import InvestorsAndDevelopers from '../components/main/InvestorsAndDevelopers';
import './css/Section.css';

const Section = (props) => {
  return(
    <section>
      <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/about-page" component={AboutPage}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/for-investors-and-developers" component={InvestorsAndDevelopers}/>
        <Route path="/for-real-estate-agents" component={() => <Agents handleForm={props.handleForm}/>}/>
        <Route path="/management" component={() => <Management handleLogin={props.handleLogin} isLogged={props.isLogged} resolution={props.resolution}/>}/>      
        <Route component={Error}/>
      </Switch>
    </section>
  );
}

export default Section;