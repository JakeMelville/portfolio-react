import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/home'
import Apps from './pages/apps'
import Header from './components/Header/'
import Footer from './components/Footer/'

function App() {
  return (
    <Router>
      <Header />
      <div className='App'>
        <Route exact path='/' component={Home} />
        <Route exact path='/apps' component={Apps} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
