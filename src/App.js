import React from 'react';

import { HashRouter, Route, Link } from 'react-router-dom'; 
import ReactGA from 'react-ga';
import {createBrowserHistory} from 'history';
import About from './About.js'; 
import Articles from './Articles.js'; 
import Main from './Main.js'; 
import Footer from './Footer.js';
import Resume from './assets/AmanSinghResume.pdf'
import VoC from './blog/VoC.js';
import NBA from './blog/NBA.js';
import './App.scss';

const history = createBrowserHistory();

// Initalize Google Analytics
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});


function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
  
        {/* Set up the Router */}

        <div className="navigation">
          <div className="navigation-sub">
                                          
             {/* Set up the Links */}
            <Link to="/" className="home-item">Aman Singh</Link>
            <div className = "navigations-links">
              <Link to="/about" className="item">About</Link>
              <a href={Resume} target="_blank" className="item">Resume</a>
            </div>
          </div>
        </div>
        <Route exact path="/" component={Main} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />

        {/* Render Blog Pages! */}
        <Route path="/VoC" render={(props) => <VoC isAuthed={true} /> } />
        <Route path="/stotle" render={(props) => <NBA isAuthed={true} /> } />
  
      <Footer></Footer>
      </div>
    </HashRouter>
  );
}

export default App;
