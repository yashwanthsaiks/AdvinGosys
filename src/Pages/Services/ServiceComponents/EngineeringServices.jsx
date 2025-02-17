import CarouselCard from "../../../components/CarouselCard/CarouselCard";
import img1 from "../../../components/ServiceCard/Service-4.jpg";
import img2 from "../../../components/ServiceCard/Service-5.jpg";
import img3 from "../../../components/ServiceCard/Service-6.jpg";
import img4 from "../../../components/ServiceCard/Service-7.jpg";
const EngineeringServices = () => {
  const slideData = [
    {
      image: img1,
      
      description: "Digital engineering services across all technology stacks",
    },
    {
      image:img2,
     
      description: "Engineering led by exclusive user experience across rendering channels such as web, mobile, desktop applications, and others",
    },
    {
      image: img3,
     
      description: "Software engineering and automation through Dev and Ops that includes all aspects of reliability, observability, and security",
    },
    {
      image: img4,
     
      description: "Application modernization initiatives that involve technology upgrades, legacy modernizations, re-architecting, re-engineering, and rehosting",
    },
  ];

  return (
    <div className="Primary-container" style={{ margin: "25px 0" }}>
      <h1 style={{ color: "white", fontSize: "3rem", marginBottom: "20px" }}>
        Engineering Services
      </h1>
      <p style={{ color: "white", fontSize: "1.2rem" ,marginTop:"50px"}}>
        The pandemic has accelerated digital transformation, and businesses are
        embracing emerging technologies like artificial intelligence (AI) to
        enhance the customer experience and stay closer to their customers. The
        technological shift and trends have propelled digital transformation and
        engineering of the next-generation applications to fuel growth, optimize
        costs and stay relevant and competitive.
        <br /> Enterprises face challenges in identifying the appropriate
        partners who can help them end-to-end in their transformation journey to
        innovate and develop new business models. <br />
        The challenges include:
      </p>
      <br />
      <ul style={{ padding: "10px 40px" }}>
        <li style={{ color: "white", fontSize: "1.2rem", marginBottom: "10px" }}>
          The absence of a one-size-fits-all solution for moving monolithic
          systems to microservices-based and(remove and) resilient systems
        </li>
        <li style={{ color: "white", fontSize: "1.2rem", marginBottom: "10px" }}>
          User experience is often looked at as a second step in digital
          transformation projects
        </li>
        <li  style={{ color: "white", fontSize: "1.2rem", marginBottom: "10px" }}>
          Customers unwilling to bet on new technologies
        </li>
      </ul>
      <h1 style={{ color: "white", fontSize: "3rem", margin:"50px 0 30px 0"}}>
        AdvinGosys’s Application Engineering practice enables customers to define
        enterprise architecture and resiliency.
      </h1>
      <p style={{ color: "white", fontSize: "1.2rem" }}>
        The service leverages an experience-first approach and deep digital
        capabilities backed by strong engineering DNA. It includes Cloud Native
        development and deployment in application modernization and development
        scenarios. Application engineering involves creating, capturing, and
        integrating data into digital tools to support the design, development,
        deployment, and sustenance of products and solutions. It includes agile
        frameworks, modeling and simulation, artificial intelligence and machine
        learning, 3D printing, connected technologies, and augmented/virtual
        reality.
      </p>
      <h2 style={{margin:"50px 0 20px 0" , padding:"10px 20px"}}>Our focus areas :</h2>
      <div style={{ display: "flex", justifyContent: "center" ,marginTop:"10px"}}>
        <CarouselCard slides={slideData}/>
      </div>
     
    </div>
  );
};

export default EngineeringServices;
