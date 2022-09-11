import Home from "./pages/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Router,Routes} from 'react-router-dom'
import Login from "./pages/login";
import Register from "./pages/register";
import Galary from "./pages/galary";
import Alloncement from "./pages/alloncement";
import Activitys from "./pages/activitys";
import Course from "./pages/course";
import Header from "./component/header";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from './pages/producted';
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/notfound";

function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer />
      
      
      
        <Routes>
        <Route exact path="/dashboard" element={<Dashboard/>}></Route>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/galary" element={<Galary/>}/>
        <Route path="/alloncement" element={<Alloncement/>}/>
        <Route path="/course" element={<Course/>}/>
        <Route path="/activitys" element={<Activitys/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
      
        
    </div>


  );
}

export default App;
