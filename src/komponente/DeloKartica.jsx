 
 

 function DeloKartica({ud}) {
    return (
       
            <div class="wrapper">
                <div class="product-img">
                <img src={ud.slika} height="420" width="327"/>
                </div>
            
            
            <div class="product-info">
                <div class="product-text">
                    <h1>{ud.naziv}</h1>
                    <h2>by {ud.autor}</h2>
                    <p> {ud.opis}  </p>
                </div>
                <div class="product-price-btn">
                    <p><span>{ud.cena}</span>RSD</p>
                   
                </div>
            </div>
      </div>
  
  
       
    );
  }
  
  export default DeloKartica;
  