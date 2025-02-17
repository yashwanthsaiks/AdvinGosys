import CarouselCard from "../../../components/CarouselCard/CarouselCard";
import img1 from "../../../components/ServiceCard/Service-4.jpg";
import img2 from "../../../components/ServiceCard/Service-5.jpg";
import img3 from "../../../components/ServiceCard/Service-6.jpg";
import img4 from "../../../components/ServiceCard/Service-7.jpg";
const BusinessOperation = () => {
  const slideData = [
    {
      image: img1,
      title: "Digital Customer Operations",
      description: "Our omnichannel journey delivers seamless, personalized experiences across phone, email, chatbots, apps, self-service portals, and social media with digital-first convenience.",
    },
    {
      image: img2,
      title: "Multimedia Content Moderation",
      description: "We guarantee AI outputs are accurate, detailed, and align with top safety, sensibility, and interest standards across the following parameters: Safety, Sensibility, Specificity, Interest.",
    },
    {
      image: img3,
      title: "Annotation Services",
      description: "Advingosys provides technology-driven, human-assisted data labeling and annotation, optimizing AI/ML models with expert planning, management, quality checks, and precise image, text, and video annotation solutions.",
    },
    {
      image: img4,
      title: "Scaled Operations",
      description: "Scaling is exciting but challenging. Premature growth risks control loss. Key challenges include resource constraints, infrastructure limits, talent shortages, and complexity, requiring efficient processes for sustained growth and performance.",
    },
  ];
  return (
    <div className="Primary-container" style={{ margin: "25px 0" }}>
      <h1 style={{ color: "white", fontSize: "3rem", marginBottom: "20px" }}>
        Business Operation
      </h1>
      <h3 style={{ color: "white", fontSize: "1.7rem" }}>
        Most modern organizations face challenges in overcoming traditional
        knowledge process outsourcing (KPO) and business process outsourcing
        (BPO) barriers.
      </h3>
      <br />
      <p style={{ color: "white", fontSize: "1.2rem" }}>
        Manual processes combined with people-centric transactional ownership
        cause additional burdens for businesses. That’s why digital
        transformation tools are essential to effectively lower costs, reduce
        time to market, and enhance insights into the market and customers.
        Companies must implement digital operations' strategies to have a
        significant business impact on the top line to overcome internal
        restrictions on implementing cost-effective digital operations'
        services.
      </p>
      <br />
      <p style={{ color: "white", fontSize: "1.2rem" }}>
        AdvinGosys’s digital operations includes digital automation, complete
        business ownership, cognitive intelligence use, and data-centric
        business automation implementation for holistic business scalability and
        resilience. Our digital engineering tools and optimization techniques
        can grow your operations quickly and improve your internal teams’
        quality, productivity, and retention. We have helped our clients to
        achieve:
      </p>
      <ul style={{ color: "white", fontSize: "1.2rem", padding: "40px 60px" }}>
        <li style={{ margin: "20px" }}>20% to 30% cost reduction</li>
        <li style={{ margin: "20px" }}>25% to 30% productivity gain</li>
      </ul>
      <div
        style={{
          display: "flex",   
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "3rem",
           padding: "0 30px",
          }}
        >
          AdvinGosys's digital operations services
        </h1>
        <div style={{borderLeft: "2px solid white",height: "220px"}}></div>
        <p style={{ color: "white", fontSize: "1.2rem",padding:"30px 55px", marginTop:"10px" }}>
          AdvinGosys advocates an execute–engage–energize (E3) methodology, which
          focuses on building relationships and collaborations to deliver
          excellent outcomes. The E3 methodology provides actionable insights
          into core process gaps, internal processes, and service design to
          improve time to market significantly. AdvinGosys’s operational rigor
          provides a digitally-engineered, first-time-right result using a
          portfolio of business transformation services to deliver a superior
          customer experience with intelligent insights.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" ,marginTop:"90px"}}>
      <CarouselCard slides={slideData}/>
      </div>
      
    </div>
  );
};

export default BusinessOperation;
