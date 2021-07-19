
import Section1 from './components/HomePage/Section1';
import Section2 from './components/HomePage/Section2';
import Section3 from './components/HomePage/Section3';
import './App.css';
import  {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ResumePage from './components/ResumePage';
import Home from './components/HomePage/Home';
import About from './components/AboutPage/About';
import Footer from './components/Footer/Footer';








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
