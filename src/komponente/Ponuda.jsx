import DeloKartica from "./DeloKartica";
import { useState } from "react";
 
 

 function Ponuda({svaDela}) {
    const [sort, setSort] = useState(true);
    function sortAsc(){
      
      setSort(true);
    }
    function sortDesc(){
      
      setSort(false);
    }
   return (
      
        <div className="ponuda">
            <div className="buttons">
                <button className="sortbtn btn" onClick={sortAsc}>Sortiraj rastuće</button>
                <button className="sortbtn btn" onClick={sortDesc}>Sortiraj opadajuće</button>
            </div>
            <div className="sva-dela">
                {
                sort==true ?
                    svaDela
                    .sort((a,b)=> a.cena<b.cena?-1:1)
                    .map((d)=> <DeloKartica key={d.id} ud={d}></DeloKartica>)
                :
                    svaDela
                    .sort((a,b)=> a.cena>b.cena?-1:1)
                    .map((d)=> <DeloKartica key={d.id} ud={d}></DeloKartica>)
                
                
                }
            </div>
        </div>
 
 
      
   );
 }
 
 export default Ponuda;
 