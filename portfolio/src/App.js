import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/home'
import Apps from './pages/apps'

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={Home} />
        <Route exact path='/apps' component={Apps} />
      </div>
    </Router>
  );
}

export default App;
