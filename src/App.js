import logo from './logo.svg';
import './App.css';
import Message from './Message'

const prof = "разработчик";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Моё приложение
        </p>
        <Message specialty = {prof} location = "уроке 1"></Message>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
