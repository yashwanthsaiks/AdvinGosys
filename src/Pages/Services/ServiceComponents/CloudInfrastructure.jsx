import CarouselCard from "../../../components/CarouselCard/CarouselCard"; // Replace with the correct path from "../../../components/CarouselCard/CarouselCard";'
import img1 from "../../../components/ServiceCard/Service-4.jpg";
import img2 from "../../../components/ServiceCard/Service-5.jpg";
import img3 from "../../../components/ServiceCard/Service-6.jpg";
import img4 from "../../../components/ServiceCard/Service-7.jpg";

const CloudInfrastructure = () => {
  const slideData = [
    {
      image:img1 ,
       title: "Cloud Data & AI",
       description:"Modernise data platform by migrating to cloud and build cloud native EDW, Data Lake and Analytical platform to deliver actionable insights."
    },
    {
      image: img2,
      title: "Cloud Migration",
      description:"Seamlessly move your existing infraustructure, applications and data to cloud with minimal disruption to your business operations."
    },
    {
      image: img3,
      title: "Cloud Operations",
      description:"Ensure high performance and secure operations at optimal cost with our global delivery capabilities and end to end managed services."
    },
    {
      image: img4,
      title:"Cloud Business Transformation",
      description:"Empower your organization to thrive in cloud era with our comprehensive cloud business transformation program."
    },
  ];

  return (
    <div className="Primary-container" style={{ margin: "25px 0" }}>
      <h1 style={{ color: "white", fontSize: "3rem", marginBottom: "20px" }}>
        Cloud Infrastructure
      </h1>
      <p style={{ color: "white", fontSize: "1.2rem" ,marginTop:"50px"}}>
        As cloud computing moves to a more optimized state, companies will
        continue to leverage a number of public, private, hybrid, and edge
        computing solutions to diversify their products and services and to
        bring flexible and secure solutions closer to their customers. AdvinGosys’s
        enterprise transformation and cloud modernization offerings help
        companies achieve a strong cloud return on investment (ROI) and
        transformative business-based results. Our cloud capabilities, which are
        built on a set of robust offerings, services, solutions, and domain
        expertise, work to drive and realize the value proposition of the cloud
        for our clients.
      </p>
      <br />
      <h1 style={{ color: "white", fontSize: "2rem", marginTop: "40px" }}>
        <b>
          Ensuring business agility and leveraging digital technologies to drive
          revenue growth and improved customer experience are the driving forces
          behind the ongoing adoption and optimization of cloud transformation
          capabilities.
        </b>
      </h1>
      <ul
        style={{
          color: "white",
          fontSize: "1.2rem",
          margin: "50px 40px",
          padding: "0 60px",
        }}
      >
        <li style={{ margin: "10px 0" }}>
          Strategic advisory solutions for ever-evolving, unique, and
          multi-cloud strategies
        </li>
        <li style={{ margin: "10px 0" }}>
          The use of accelerators, automation, and artificial intelligence (AI)
          to improve the security, efficiency, and velocity of cloud migration
          and modernization
        </li>
        <li style={{ margin: "10px 0" }}>
          The implementation of comprehensive cloud strategies that address
          governance, sovereignty, compliance, and cost management
        </li>
        <li style={{ margin: "10px 0" }}>
          End-to-end, at-scale cloud modernization services that leverage global
          talent and current hyperscaler solutions
        </li>
      </ul>
      <h2 style={{marginTop:"40px",fontSize:"2rem",color:"white"}}>
        AdvinGosys's cloud transformation engagements enable both continued cloud
        adoption and application modernization within the cloud.
      </h2>
     
      <div style={{ display: "flex", justifyContent: "center" ,marginTop:"90px"}}>
        <CarouselCard slides={slideData}/>
      </div>
    </div>
  );
};

export default CloudInfrastructure;
