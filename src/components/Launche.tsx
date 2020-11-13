import React from 'react';
import Iframe from 'react-iframe'


type TLaunche = {

    date : Date,
    success : boolean,
    rocket : string,
    links : string,
    details? : string,
} 





const Launche = ({ date, success, rocket, links, details } : TLaunche): JSX.Element => {
  
  return (
    <article className="card">

        <h4> Space X launches </h4>
        <p>  Rocket : {rocket} </p>
        
        

        <p>Date : {date} </p>
        <Iframe url={"https://www.youtube.com/embed/" + links.substring(32, links.length)}
        width="200px"
        height="200px"
        position="relative"/>
        <br/>
        <p> Succes : {success ? 'Yes':'No'}</p>
        <p> Details : { details ? details : 'Empty' }</p>
      </article>
    );
  };
  
  export default Launche;
  