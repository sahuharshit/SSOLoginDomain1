import logo from './logo.svg';
import './App.css';
import LoginButton from './components/Login';
import Profile from './components/Profile';
import LogoutButton from './components/Logout';

function App() {
  return (
   <>
    <LoginButton />
    <Profile />
    <LogoutButton />
   </>
  );
}

export default App;
