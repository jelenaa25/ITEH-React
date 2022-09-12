 
 import { Link } from "react-router-dom";

function Navbar({postaviFilter}) {
  return (
     
        <nav className="navbar navbar-light bg-light justify-content-between">
        < Link  to="/" className="navbar-brand">Pocetna</Link>
        < Link  to="/ponuda" className="navbar-brand">Ponuda</Link>

        < Link  to="/kontakt" className="navbar-brand">Kontakt</Link>

        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={postaviFilter}/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        </nav>


     
  );
}

export default Navbar;
