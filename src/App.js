 
import './App.css';
import Kontakt from './komponente/Kontakt';
import Navbar from './komponente/Navbar';
import Pocetna from './komponente/Pocetna';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './komponente/Footer';
function App() {
  return (
     <div>

      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Pocetna></Pocetna>}></Route>
        <Route path="/kontakt" element={<Kontakt></Kontakt>}></Route>

      </Routes>
      <Footer></Footer>
       

      </BrowserRouter>
     </div>
  );
}

export default App;
