
import './App.css';
import Navbar from './Components/JS/Navbar.js'
import Home from './Components/JS/Home.js'
import Admin from './Components/JS/Admin.js'
import SimpleUser from './Components/JS/SimpleUser'
import CommanLogin from './Components/JS/CommanLogin'
import View from './Components/JS/View'
import Notification from './Components/JS/Notification'
import ProfileService from './Components/JS/ProfileService'
import ProfileUser from './Components/JS/ProfileUser'
import {Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
     <Route exact path="/"><Home/></Route> 
     <Route exact path="/SimpleUser"><SimpleUser/></Route>
     <Route exact path="/Admin"><Admin/></Route>
     <Route exact path="/CommanLogin"><CommanLogin/></Route>
     <Route exact path="/View/:name"><View/></Route>
     <Route exact path="/Notification"><Notification/></Route>
     <Route exact path="/ProfileService"><ProfileService/></Route>
     <Route exact path="/ProfileUser"><ProfileUser/></Route>
      </Switch>
    </div>
  );
}

export default App;
