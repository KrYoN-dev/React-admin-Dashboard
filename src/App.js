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
            

            </Switch>
            
            
        </div>

            
        </Router>
    )
}

export default App;