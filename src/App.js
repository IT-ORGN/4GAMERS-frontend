import './App.css';
//import './Component/Site.css';

import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import {BrowserRouter, Route,Routes} from'react-router-dom'
import Help from './Component/Pages/Help';
import Products from './Component/Pages/Products';
import ContactUs from './Component/Pages/ContactUs';
import Categorie from './Component/Pages/Categorie';
import './index.js'
import Login from './Component/Pages/Login';
import Home from './Component/Pages/Home';
//import Home from './Component/Pages/Home';

function App() {
  return (
    
    <div className="App">
   
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/help" element={<Help/>}/>
      <Route path="/contactUs" element={<ContactUs/>}/>
      <Route path="/categorie" element={<Categorie/>}/>
      <Route path="/login_form" element={<Login/>}/>
      
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
    
    
  );
}

export default App;
