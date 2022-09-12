 
 

 function DeloKartica({ud}) {
    return (
       
            <div className="wrapperP">
                <div className="product-img">
                <img src={ud.slika} height="420" width="327"/>
                </div>
            
            
            <div className="product-info">
                <div className="product-text">
                    <h1>{ud.naziv}</h1>
                    <h2>by {ud.autor}</h2>
                    <p> {ud.opis}  </p>
                </div>
                <div className="product-price-btn">
                    <p><span>{ud.cena}</span>RSD</p>
                   
                </div>
            </div>
      </div>
  
  
       
    );
  }
  
  export default DeloKartica;
  