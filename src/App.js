import {Routes , Route} from "react-router-dom"
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const user = false; 
  return (
    <div>
      <TopBar/>
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register/>} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write/> : <Register/>} />
        <Route path="/settings" element={user ? <Setting/>: <Register/>}/>
        <Route path="/post/:postId" element={<Single />}/>
        

    </Routes>
    

    
    </div>
  );
}

export default App;
