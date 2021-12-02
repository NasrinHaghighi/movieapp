import React from 'react'
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import SingleMovie from './pages/SingleMovie';
import './App.css';


function App() {
  return (
   <Router>
     <Navbar />
      <Switch>
        <Route exact path='/'>

               <Home />
            
        </Route>
        <Route path='/about'>
          
             <About />
 
        </Route>
        <Route  path='/movie/:id'>
          
            <SingleMovie/>

        </Route>
        </Switch>

   </Router>
  );
}

export default App;
