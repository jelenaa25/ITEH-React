import DeloKartica from "./DeloKartica";

 
 

 function Ponuda({svaDela}) {
   return (
      
        <div>
            {svaDela.map((d)=> <DeloKartica key={d.id} ud={d}></DeloKartica>)}
            
        </div>
 
 
      
   );
 }
 
 export default Ponuda;
 