import './App.css';
// import Welcomepage from './Components/welcomePage';
import { NavLink } from 'react-router-dom';
import Navbar from './Components/NavBar';

function App() {
  return (
    <div>
      <div className="nav-links">
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/trends'>Trends</NavLink> 
        <NavLink to='/new'>Add A New Look</NavLink>
        <NavLink to='/favorites'>Favorites</NavLink>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
