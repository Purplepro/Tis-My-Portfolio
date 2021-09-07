

import './App.css';
import  {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ResumePage from './components/ResumePage';
import Home from './components/HomePage/Home';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact'
import { AnimatePresence } from 'framer-motion'







function App() {
  return (
    <div>
      
      <BrowserRouter>
      <AnimatePresence>
      <Switch>
      <Route path='/contact' component={Contact}/>
      <Route path='/resumepage' component={ ResumePage }/>
      <Route exact path='/' component={ Home }/>
      </Switch>
      </AnimatePresence>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
