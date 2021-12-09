import './App.css';
import { NavLink } from 'react-router-dom';
import Navbar from './Components/NavBar';

function App() {
  return (
    <div>
      <div className="nav-links">
        <NavLink to='/home' className={isActive => isActive ? "selected" : ""} id="nav-home">Home</NavLink>
        <NavLink to='/trends' className={isActive => isActive ? "selected" : ""} id="nav-trend">Trends</NavLink> 
        <NavLink to='/new' className={isActive => isActive ? "selected" : ""} id="nav-new">Add A New Look</NavLink>
        <NavLink to='/favorites' className={isActive => isActive ? "selected" : ""} id="nav-favorite">Favorites</NavLink>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
