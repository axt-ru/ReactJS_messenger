import logo from './logo.svg';
import './App.css';
import Routes from './components/Routes';
import { Provider } from "react-redux";
import { store, saveInStorage } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import LinearProgress from '@material-ui/core/LinearProgress';

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
        <PersistGate persistor={saveInStorage} loading={<LinearProgress variant="buffer" value={20} valueBuffer={50} />}>
          <Routes />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
