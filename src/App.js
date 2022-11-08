import './App.css';

import Main from './Main';
import AboutUs from './AboutUs';
import Catalog from './Catalog';
import Contacts from './Contacts';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <nav className="container">
          <Link className='item' to='/main'>Главная</Link>
          <Link className='item' to='/aboutUs'>О нас</Link>
          <Link className='item' to='/catalog'>Каталог</Link>
          <Link className='item' to='/contacts'>Контакты</Link>
        </nav>

        <Routes>
          <Route path='/main' element={<Main/>}/>
          <Route path='/aboutUs' element={<AboutUs/>}/>
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
        </Routes>

      </Router>

     
      <Footer/>
    </div>
  );
}

export default App;
