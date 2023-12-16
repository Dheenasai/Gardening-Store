import logo from './logo.svg';
import './App.css';
import LoginPage from './components/login/LoginPage';
import SignupPage from './components/login/SignupPage';
function App() {
  return (
    <div className="App">
      <LoginPage/>
      <SignupPage/>
    </div>
  );
}

export default App;
