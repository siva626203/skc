import Home from "./pages/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes,} from 'react-router-dom'
import Login from "./pages/login";
import Register from "./pages/register";
import Galary from "./pages/galary";
import Alloncement from "./pages/alloncement";
import Activitys from "./pages/activitys";
import Course from "./pages/course";
import Header from "./component/header";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/galary" element={<Galary />}/>
        <Route path="/alloncement" element={<Alloncement />}/>
        <Route path="/course" element={<Course />}/>
        <Route path="/activitys" element={<Activitys />}/>
      </Routes>
    </div>
  );
}

export default App;
