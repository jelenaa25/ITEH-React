 
 import { Link } from "react-router-dom";

function Navbar({postaviFilter}) {
  return (
     
        <nav className="navbar navbar-dark bg-dark">
        < Link  to="/" className="navbar-brand">Pocetna</Link>
        < Link  to="/ponuda" className="navbar-brand">Ponuda</Link>

        < Link  to="/kontakt" className="navbar-brand">Kontakt</Link>

        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={postaviFilter}/>
             
        </form>
        </nav>


     
  );
}

export default Navbar;
