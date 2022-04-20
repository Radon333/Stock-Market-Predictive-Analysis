import Main from './Components/Main';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import DashBoard from './Components/DashBoard';
function App() {
  const user = localStorage.getItem('token');
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        {user && <Route path="/dashboard" exact element={<DashBoard />} />}
      </Routes>
    </div>
  );
}

export default App;
