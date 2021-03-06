import Sidebar from "./component/sidebar/Sidebar";
import Topbar from "./component/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home" ;
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";


 function App() {
    return (
        <Router>
        <Topbar/>
        <div className="container">
            <Sidebar/>
            <Switch>
            <Route exact path="/">
            <Home/>
             </Route>
             <Route path="/users">
            <UserList/>
             </Route>
             <Route path="/user/:userId">
            <User/>
             </Route>
            

            </Switch>
            
            
        </div>

            
        </Router>
    )
}

export default App;