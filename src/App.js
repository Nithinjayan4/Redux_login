import Login from './Components/Login';
import { selectUser } from './Feature/UserSlice';
import logo from './logo.svg';
import {useSelector} from "react-redux"
import Logout from './Components/Logout';
// import './App.css';

function App() {
  const user = useSelector(selectUser);
  return (
    <div >
     { user ? <Logout/> : <Login/> }
      
    </div>
  );
}

export default App;
