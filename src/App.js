import './App.css';
import Itemslist from './Components/itemsList';
// import Welcomepage from './Components/welcomePage';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div>
      <div class="nav-links">
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/trends'>Trends</NavLink> 
        <NavLink to='/new'>Add A New Look</NavLink>
        <NavLink to='/favorites'>My Trends</NavLink>
      </div>
      {/* <Welcomepage /> */}
      <Itemslist />
    </div>
  );
}

export default App;
