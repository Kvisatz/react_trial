import logo from './images/logo.svg';
import bg_video from './images/bg.mp4';
import './App.css';
import Auth from './Components/Pages/Auth/Auth';
import Navbar from './Components/Pages/Navbar/Navbar.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      

        <video className="bg_video" width="100%" autoPlay muted loop>
            <source src={bg_video} type="video/mp4"/>
        </video>

        <div className="content">
          <header className="App-header">

            <img src={logo} className="App-logo" alt="logo" />

            <button className='MenuButton'>
              <FontAwesomeIcon icon={faBars} />
              {/* <FontAwesomeIcon icon={faXmark} /> */}
            </button>
            
          </header>
          
          <Auth/>
          
        </div>

        
      <Navbar/>
        
        
        



    </div>
  );
}

export default App;
