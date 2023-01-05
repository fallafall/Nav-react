import React,{Component} from "react";
import Singers from './Singers';

class Display extends Component{

    noCopy= ()=>{
        alert('merci de ne pas copier le texte')
    }
    render(){
        return(

         <div>
             <h1>Les musiciens</h1>
             <p onCopy={this.noCopy}>hgfhdfb hjdjfdbjhfbhfbdb</p>
                <Singers nom="youssou" age="60 ans"/>
                <Singers nom="Waly" age="40 ans" />
                <Singers nom="TiTi" age=""/>
                <Singers nom="Dieyla" age="30 ans"/>
         </div>

        )
    }
}
export default Display;