import React, { Component } from "react";
import subjects from "./data.json";


const ScpData = subjects.map(

    (subjects) =>
    {
        return(
            <div className="col-4" key={subjects.id}>
               <div className="card border-secondary mb-3">
                   <h1 className="card-title">Item Number: {subjects.item}</h1>
                   <h2 className="text-muted"> Class: {subjects.class}</h2>
                   <div className="card shadow-sm">
                    <img src={subjects.image} />
                    <ul className="list-group item">
                        <li className="list-group-item">Procedures: {subjects.procedures}</li> 
                        <li className="list-group-item">Description: {subjects.description}</li>
                           
                    </ul>
                </div>
                </div>
                </div>
        );
    }

);

class Content extends Component
{
    render()
    {
        return(
            <div className="album py-5 bg-dark">
                <div className="container">
                    <div className="row row-cols-sm-2 cols-md-3 g-3">
                    {ScpData}
                    </div>
                
                </div>
            </div>
           
        );
    }
}

export default Content;