import './App.css';
import './App.scss';
import Header from './Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar/NavbarComponent';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
