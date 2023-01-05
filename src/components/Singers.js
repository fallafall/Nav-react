import React from "react";

const Singers = ({nom, age}) => {

    // console.log(name, age);
    const AgeInfo = age? (<h4>j'ai {age}</h4>): (<h4> y'a pas d'age</h4>)
    return(
     
         <div style={{backgroundColor:'pink', margin:'5px auto', width:'400px'}}>
             <h4>je suis {nom} : {AgeInfo} </h4>
        </div>
     )
}
export default Singers;