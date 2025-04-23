import React from "react";

function ServiceList({title,description}){
    return(
        <div style={{padding:"20px",border:"2px solid #ccc",borderRadius:"10px",backgroundColor:"darkblue",color:"white",boxShadow:"0 4px 6px rgba(0,0,0,0.1)"}}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default ServiceList;