import ServiceCard from "../../components/ServiceCard/ServiceCard";

import "./Services.css";
const Services = () => {
  return (
    <>
      <div className="container-three">
        <h1>
         <span style={{fontSize:"3rem"}}>AdvinGosys Services :</span> <br /> Transform your Business with Advanced
          Technologies
        </h1>
        <br />
        <br/>
        <h2 >
          AdvinGosys: Empowering IT & Healthcare with Cognitive and Generative
          AI | Unmatched Core to Experience Transformation
        </h2>
        <div style={{marginTop:"50px" }}>
        <ServiceCard />
        </div>
        
      </div>
    </>
  );
};
export default Services;
