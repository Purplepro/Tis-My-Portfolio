

import './App.css';
import  {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ResumePage from './components/ResumePage';
import Home from './components/HomePage/Home';
import About from './components/AboutPage/About';
import Footer from './components/Footer/Footer';
import {TweenMax, Power3} from 'gsap';







function App() {
  return (
    <div>
  
      <BrowserRouter>
      <Navbar/>
     
      <Switch>
      <Route path='/resumepage' component={ ResumePage }/>
      <Route path='/about' component={ About }/>
      <Route exact path='/' component={ Home }/>
      </Switch>
      <Footer/>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
