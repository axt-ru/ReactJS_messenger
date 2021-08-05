import logo from './logo.svg';
import './App.css';
import Routes from './components/Routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Чаты
        </p>
      </header>
      <Routes />
    </div>
  );
}

export default App;
