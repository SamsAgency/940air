import './App.css';
import Main from './components/main/main'
import Navbar from './components/navbar/navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import User from './components/User/User';
import Notfound from './components/NotFound/Notfound';
import Contactus from './components/ContactUs/Contactus';
import About from './components/About/About';
import Water from './components/Water/Water';
import Ground from './components/Ground/Ground';
import Air from './components/Air/Air';

function App() {
  return (
    // <div className="app">
    //       <Navbar/>
    //       <Main/>
    // </div>
   
    <Router className="app">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/user" component={User}/>
        <Route path='/contact' component={Contactus}/>
        <Route path="/about" component={About}/>
        <Route path="/water" component={Water}/>
        <Route path="/air" component={Air}/>
        <Route path="/Ground" component={Ground}/>

        <Route component={Notfound}/>
      </Switch>
    </Router>

  );
}

export default App;
