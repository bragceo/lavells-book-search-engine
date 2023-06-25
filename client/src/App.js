import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

function App({client}) {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' render={props => <SearchBooks client={client} {...props} />} />
          <Route exact path='/saved' render={props => <SavedBooks client={client} {...props} />} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
