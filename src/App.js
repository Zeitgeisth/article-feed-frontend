import Page from './pages/Login';
import Home from './pages/Home';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
         <div className="App">
          <Page/>
    </div>
    </Router>
   
  );
}

export default App;
