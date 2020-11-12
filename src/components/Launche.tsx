import React from 'react';

type TLaunche = {

    date : Date,
    success : boolean,
    rocket? : string,
    links : string,
    details? : string,
} 



const Launche = ({ date, success, rocket, links, details } : TLaunche): JSX.Element => {
    return (
      <article className="card">

        <h4>Space X launches</h4>
        <h3>{date}</h3>
        <h3>{success}</h3>
        <h3>{details}</h3>
        
    </article>
    );
  };
  
  export default Launche;
  