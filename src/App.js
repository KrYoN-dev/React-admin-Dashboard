import Sidebar from "./component/sidebar/Sidebar";
import Topbar from "./component/topbar/Topbar";
import "./app.css"


 function App() {
    return (
        <div>
        <Topbar/>
        <div className="container">
            <Sidebar/>
            <div className="others">
                others
                
            </div>
            
        </div>

            
        </div>
    )
}

export default App;