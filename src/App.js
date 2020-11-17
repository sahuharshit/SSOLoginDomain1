import logo from './logo.svg';
import './App.css';
import LoginButton from './components/Login';
import Profile from './components/Profile';
import LogoutButton from './components/Logout';

function App() {
    return (
        <>
            <LoginButton/>
            <Profile/>
            <br/><br/><br/>
            <a href="https://secondappsso.vercel.app/"
                style={
                    {
                        padding: 30,
                        border: '1px solid',
                        display: 'flex',
                        justifyContent: 'center',
                        width: 400,
                        margin: 'auto'
                    }
            }>Summary Maker</a>
            <br/><br/><br/>
            <a href="https://secondappsso.vercel.app/"
                style={
                    {
                        padding: 30,
                        border: '1px solid',
                        display: 'flex',
                        justifyContent: 'center',
                        width: 400,
                        margin: 'auto'
                    }
            }>Presentation Maker</a>

            <LogoutButton/>
        </>
    );
}

export default App;
