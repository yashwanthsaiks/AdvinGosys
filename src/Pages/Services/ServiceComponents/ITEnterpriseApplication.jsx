import CarouselCard from "../../../components/CarouselCard/CarouselCard";
import img1 from "../../../components/ServiceCard/Service-4.jpg";
import img2 from "../../../components/ServiceCard/Service-5.jpg";
import img3 from "../../../components/ServiceCard/Service-6.jpg";
import img4 from "../../../components/ServiceCard/Service-7.jpg";

const ITEnterpriseApplication = () => {
  const slideData = [
    {
      image: img1,
      title: "AI Adoption in Data Strategy",
      description: "Defining and implementing enterprise-wide data strategy covering data governance, data on the cloud, and artificial intelligence (AI) adoption.",
    },
    {
      image: img3,
      title: "Modern Data Platform",
      description: "Modernizing the data platform to respond quickly to changing market requirements and lower the cost of operations",
    },
    {
      image: img2,
      title: "Scalable ML Models",
      description: "Building scalable solutions with our expertise in machine learning (ML) models, analytical platforms, application programming interfaces (APIs), tools, and programming.",
    },
    {
      image: img4,
      title: "Key KPIs",
      description: "Defining key process indicators (KPIs) and delivering meaningful insights via reports, dashboards, and advanced data visualization.",
    },
 
  ];
  return (
    <div className="Primary-container" style={{ margin: "25px 0" }}>
      <h1 style={{ color: "white", fontSize: "3rem", marginBottom: "20px" }}>
        IT Enterprise & Applications
      </h1>
      <p style={{ color: "white", fontSize: "1.2rem" }}>
        Reimagine your enterprise resource planning (ERP) journey with AdvinGosys’s
        Enterprise Platforms services to address evolving customer expectations.
        At AdvinGosys, we help our clients to deliver on the promise of increased
        return on investment (ROI), faster time to market, and better
        decision-making. As organizations take significant strides to become
        future-ready, the focus is rapidly shifting towards increasing
        operational efficiencies and offering seamless customer experience.
        Legacy infrastructure, incapable of delivering data-driven insights, no
        longer fits the bill. The need of the hour is to become an intelligent
        enterprise. And critical drivers to achieve that are to follow
        continuous innovation and automation.
      </p>
      <br />
      <h1>
        <b>
          AdvinGosys helps enterprises embark on their journey to scale business.
        </b>
      </h1>
      <h2 style={{ margin: "15px 0" }}>
        By choosing the right solution and implementing and managing the
        platforms, we drive functional excellence for your business.
      </h2>
      <p style={{ color: "white", fontSize: "1.2rem" }}>
        Various business functions in an organization are the catalysts that
        fuel its performance and returns. It’s imperative to ensure functional
        excellence at the micro-level within every unit. AdvinGosys’s Enterprise
        Platforms services are a powerful and versatile enabler of success that
        helps businesses with its:
      </p>
      <ul style={{ padding: "10px 40px" }}>
        <li style={{ color: "white", fontSize: "1.2rem" ,marginBottom: "10px"}}>
          Intelligent and robust transformation services through an ERP
          portfolio coupled with the centralized process, methods, and
          accelerators
        </li>
        <li style={{ color: "white", fontSize: "1.2rem",marginBottom: "10px" }}>
          Engineering DNA driving innovation by combining deep industry
          expertise with next-gen technologies
        </li>
        <li style={{ color: "white", fontSize: "1.2rem" ,marginBottom: "10px"}}>
          Specializes in financial transformation using industry best practices
          to accelerate value delivered to our customers
        </li>
      </ul>
      <h1>Amplify business outcomes with the right platform</h1>
      <p style={{ color: "white", fontSize: "1.2rem" ,margin: "20px 0"}}>
        Using digital ERP transformation to shape your corporate strategy, drive
        long-term growth, and improve results, AdvinGosys’s Enterprise Platforms
        services can help you enjoy the following:
      </p>
      <ul style={{ padding: "10px 40px" }}>
        <li style={{ color: "white", fontSize: "1.2rem" ,marginBottom: "10px"}}>
          Enhanced productivity
        </li>
        <li style={{ color: "white", fontSize: "1.2rem" ,marginBottom: "10px"}}>
          Accelerated business processes
        </li>
        <li style={{ color: "white", fontSize: "1.2rem" ,marginBottom: "10px"}}>
          Rapid response to disruption and new business demands
        </li>
        <li style={{ color: "white", fontSize: "1.2rem",marginBottom: "10px" }}>
          Tailored roadmap for customer’s digital adoption journey
        </li>
      </ul>
      <div style={{marginTop:"40px"}}>
        <CarouselCard slides={slideData} />
      </div>
    </div>
  );
};

export default ITEnterpriseApplication;
