import React, { Component } from 'react';
import XaviersHome from "./containers/XavierHome/XaviersHome";
import Layout from "./HOC/withLayout/Layout";
import {BrowserRouter,Router,Route} from 'react-router-dom';
import InvitedSpeakers from "./containers/InvitedSpeakers/InvitedSpeakers";
import About from "./containers/About/About";
import Venue from "./containers/Venue/Venue";
import Registration from "./containers/Registration/Registration";
import OrganisingCommittee from "./containers/OrganisingCommittee/OrganisingCommittee";
import Connect from "./containers/Connect/Connect";





class App extends Component {

  render() {
    return (
        <BrowserRouter>
            <Layout>
                    <Route exact path="/" component={XaviersHome}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/venue" component={Venue}/>
                    <Route exact path="/registration" component={Registration}/>
                    <Route exact path="/invitedspeakers" component={InvitedSpeakers}/>
                    <Route exact path="/organisingcommittee" component={OrganisingCommittee}/>
                    <Route exact path="/connect" component={Connect}/>
            </Layout>
        </BrowserRouter>
    );
  }
}

export default App;
