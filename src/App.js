import './App.css';

import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';

 function App() {
  return (
    <div className="App">
      < Login />
    </div>
  );
}

export default App;
