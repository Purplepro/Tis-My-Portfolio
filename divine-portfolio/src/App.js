

import './App.css';
import  {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ResumePage from './components/ResumePage';
import Home from './components/HomePage/Home';
import About from './components/AboutPage/About';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact'
import {TweenMax, Power3} from 'gsap';







function App() {
  return (
    <div>
  
      <BrowserRouter>
     
      <Switch>
      <Route path='/contact' component={Contact}/>
      <Route path='/resumepage' component={ ResumePage }/>
      <Route exact path='/' component={ Home }/>
      </Switch>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
