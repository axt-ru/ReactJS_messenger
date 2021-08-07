import logo from './logo.svg';
import './App.css';
import Routes from './components/Routes';
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Чаты
        </p>
      </header>
      <Provider store={store}>
      <Routes />
      </Provider>
    </div>
  );
}

export default App;
