import './App.css';
// import Welcomepage from './Components/welcomePage';
import { NavLink } from 'react-router-dom';
import Navbar from './Components/NavBar';

function App() {
  return (
    <div>
      <div className="nav-links">
        <NavLink to='/home' className={isActive => isActive ? "selected" : ""}>Home</NavLink>
        <NavLink to='/trends' className={isActive => isActive ? "selected" : ""}>Trends</NavLink> 
        <NavLink to='/new' className={isActive => isActive ? "selected" : ""}>Add A New Look</NavLink>
        <NavLink to='/favorites' className={isActive => isActive ? "selected" : ""}>Favorites</NavLink>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
