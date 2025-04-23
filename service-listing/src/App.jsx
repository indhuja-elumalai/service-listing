import React from "react";
import ServiceList from "./components/ServiceList";

function app(){
  return(
    <div style={{display:"flex",flexWrap:"wrap",gap:"40px",padding:"40px",justifyContent:"center"}}>
      <ServiceList title="Web Development" description="Create a full-fledged mordern website."/>
      <ServiceList title="UI/UX Design" description="Experience the touch of perfection!"/>
    </div>
  );
}

export default app;