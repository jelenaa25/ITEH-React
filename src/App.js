 
import './App.css';
import Kontakt from './komponente/Kontakt';
import Navbar from './komponente/Navbar';
import Pocetna from './komponente/Pocetna';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './komponente/Footer';
import Ponuda from './komponente/Ponuda';
import { useState } from "react";
function App() {


  const [dela] = useState([
    {
      id:1,
      naziv:"UMETNICA",
      opis:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      slika:"https://www.serbianaart.rs/images/44650.jpg",
      cena:150000,
      autor:"Stojkovic Marija"
    },
    {
      id:2,
      naziv:"UMETNICA",
      opis:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      slika:"https://www.serbianaart.rs/images/44650.jpg",
      cena:69999,
      autor:"Stojkovic Marija"
    },
    {
      id:3,
      naziv:"UMETNICA",
      opis:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      slika:"https://www.serbianaart.rs/images/44650.jpg",
      cena:8000,
      autor:"Stojkovic Marija"
    },
    {
      id:4,
      naziv:"UMETNICA",
      opis:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      slika:"https://www.serbianaart.rs/images/44650.jpg",
      cena:15000,
      autor:"Stojkovic Marija"
    }
  ]);

  return (
     <div>

      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Pocetna></Pocetna>}></Route>
        <Route path="/kontakt" element={<Kontakt></Kontakt>}></Route>
        <Route path="/ponuda" element={<Ponuda svaDela={dela}></Ponuda>}></Route>


      </Routes>
      <Footer></Footer>
       

      </BrowserRouter>
     </div>
  );
}

export default App;
