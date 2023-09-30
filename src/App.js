import logo from './logo.svg';
import Display from './Display';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h3>Enjoy this basic Calculator app, developed using React!</h3>
      <Display />\
    </div>
  );
}

export default App;
