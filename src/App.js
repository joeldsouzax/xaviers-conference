import React, { Component } from 'react';
import XaviersHome from "./containers/XavierHome/XaviersHome";
import Layout from "./HOC/withLayout/Layout";
import {BrowserRouter,Router,Route} from 'react-router-dom';
import InvitedSpeakers from "./containers/InvitedSpeakers/InvitedSpeakers";




class App extends Component {

  render() {
    return (
        <BrowserRouter>
            <Layout>
                    <Route exact path="/" component={XaviersHome}/>
                    <Route exact path="/invitedspeakers" component={InvitedSpeakers}/>
            </Layout>
        </BrowserRouter>
    );
  }
}

export default App;
