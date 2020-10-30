import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import StoryPage from './Pages/StoryPage'
import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Route path='/' component={Home} exact/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/create-an-account' component={SignUp}/>
        <Route path='/sign-in' component={SignIn}/>
        <Route path='/story-page/:id' component={StoryPage}/>
      </Router>
    </div>
  );
}

export default App;