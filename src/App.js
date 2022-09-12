 
import './App.css';
import Kontakt from './komponente/Kontakt';
import Navbar from './komponente/Navbar';
import Pocetna from './komponente/Pocetna';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './komponente/Footer';
import Ponuda from './komponente/Ponuda';
import { useState } from "react";
function App() {

  const [filter,setFilter]=useState("");
  function postaviFilter(e){
    setFilter(e.target.value)
    osvezi();
  }
 

  const [dela] = useState([
    {
      id:1,
      naziv:"BljESTAVOST",
      opis:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      slika:"https://www.serbianaart.rs/images/bljestavost-000000-s57624.jpg",
      cena:150000,
      autor:"Budimir Branka"
    },
    {
      id:2,
      naziv:"BROD",
      opis:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      slika:"https://www.serbianaart.rs/images/tisina-000000-s57589.jpg",
      cena:69999,
      autor:"Stojkovic Marija"
    },
    {
      id:3,
      naziv:"TRI BELA GOLUBA",
      opis:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      slika:"https://www.serbianaart.rs/images/tri-bela-goluba-141013-s57586.jpg",
      cena:8000,
      autor:"Snezana Djurkovic"
    },
    {
      id:4,
      naziv:"UMETNICA",
      opis:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      slika:"https://www.serbianaart.rs/images/44650.jpg",
      cena:15000,
      autor:"Stojkovic Marija"
    },
    {
      id:5,
      naziv:"STARI GRAD",
      opis:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      slika:"https://www.serbianaart.rs/images/stari-grad-083849-s57591.jpg",
      cena:150000,
      autor:"Budimir Branka"
    },
    {
      id:6,
      naziv:"ZLATNA PRASINA",
      opis:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      slika:"https://www.serbianaart.rs/images/zlatna-prasina-054813-s57548.jpg",
      cena: 7500,
      autor:"Stojkovic Marija"
    },
    {
      id:7,
      naziv:"U STAKLENOJ BASTI",
      opis:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      slika:"https://www.serbianaart.rs/images/u-stakenoj-basti-080919-s57575.jpg",
      cena: 18000,
      autor:"Veselinovic Slobodan"
    },
    {
      id:8,
      naziv:"KOSOVKA DEVOJKA",
      opis:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      slika:"https://www.serbianaart.rs/images/kosovka-devojka-000000-s57572.jpg",
      cena: 24000,
      autor:"Ana Art"
    }
  ]);
  const [filtriranaDela,setFiltriranaDela]= useState(dela);
  function osvezi(){
    console.log(filter);
    if(filter=="")  
    setFiltriranaDela(dela);
    var niz = dela.filter((d)=> d.naziv.toLowerCase().includes(filter.toLowerCase()));
    setFiltriranaDela(niz);
    console.log(filtriranaDela)
  }
  return (
     <div>

      <BrowserRouter>
      <Navbar postaviFilter={postaviFilter}></Navbar>
      <Routes>
        <Route path="/" element={<Pocetna></Pocetna>}></Route>
        <Route path="/kontakt" element={<Kontakt></Kontakt>}></Route>
        <Route path="/ponuda" element={<Ponuda svaDela={filtriranaDela}></Ponuda>}></Route>


      </Routes>
      <Footer></Footer>
       

      </BrowserRouter>
     </div>
  );
}

export default App;
