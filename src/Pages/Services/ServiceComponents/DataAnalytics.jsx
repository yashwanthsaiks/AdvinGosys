import { TiCloudStorage } from "react-icons/ti";
import { IoIosAnalytics } from "react-icons/io";
import { IoMdAnalytics } from "react-icons/io";
import CarouselCard from "../../../components/CarouselCard/CarouselCard";
import img1 from "../../../components/ServiceCard/Service-4.jpg";
import img2 from "../../../components/ServiceCard/Service-5.jpg";
import img3 from "../../../components/ServiceCard/Service-6.jpg";
import img4 from "../../../components/ServiceCard/Service-7.jpg";
const DataAnalytics = () => {
  const slideData = [
    {
      image: img1,
      title: "Data Modeling",
      description: "Advingosys offers a comprehensive data modeling framework, building traditional and modern models on-premise and cloud, ensuring robust BPM, entity identification, BUS matrix creation, and logical-physical data structuring",
    },
    {
      image: img3,
      title: "Machine Learning Operations",
      description: "Advingosys tackles MLOps challenges with tailored solutions, streamlining ML processes, optimizing models, and accelerating time-to-market through data preparation, model development, deployment, compliance, and advanced MLOps tooling integration.",
    },
    {
      image: img2,
      title: "Data Insights",
      description: "Advingosys accelerators optimize model orchestration, delivering data insights, cost savings, industry solutions, and partnerships with tech leaders and Ivy League institutions for research and talent development.",
    },
    {
      image: img4,
      title: "Data Warehouse Platform",
      description: "Advingosys leverages expertise in modern data platforms, offering proven on-premise and cloud architectures (AWS, Google Cloud, Azure, Snowflake) to address client challenges effectively.",
    },
  ];

  return (
    <div className="Primary-container" style={{ margin: "25px 0" }}>
      <h1 style={{ color: "white", fontSize: "3rem", marginBottom: "20px" }}>
        Data Analytics
      </h1>
      <h2>
        It’s time to speed up your data management with AdvinGosys’s Data
        Engineering that provides a fit-for-purpose architecture
      </h2>
      <br />
      <p style={{ color: "white", fontSize: "1.2rem" }}>
        The surge in the data generated and captured by organizations is
        overwhelming. As a result, the ability to harness, manage, and analyze
        data has become imperative. Moreover, with the availability of a
        plethora of technology options and differing architectures to choose
        from, these organizations require expertise to decide on what is the
        best suitable for them. Other challenges like technology sprawl, a
        high-tech debt, non-optimal utilization of scarce resources, and
        multiple processes and frameworks bog organizations down as they strive
        to build a data-driven decision-making culture.
        <br /> AdvinGosys’s data engineering accelerators help these businesses to
        speed up their data management using industry-leading toolkits that
        follow a tech-agnostic approach and outcome-driven data pipelines.
      </p>
      <br />
      <div>
        <h1 style={{ color: "white", fontSize: "2.5rem", marginTop: "40px" }}>
          Make winning real-time decisions with modern data architecture
        </h1>
        <p style={{ color: "white", fontSize: "1.2rem", margin: "30px 0" }}>
          AdvinGosys’s consulting offerings help organizations rationalize data
          assets to develop a data modernization roadmap. Our proven delivery
          methodology, technology expertise, and a certified pool of global
          consultants enable businesses to drive seamless data orchestration by:
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div>
              {" "}
              <TiCloudStorage size={50} color="#68d0ee" />
            </div>

            <h2>Analyzing data landscape</h2>
          </div>
          <div style={{ borderLeft: "2px solid white" }}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div>
              {" "}
              <IoIosAnalytics size={50} color="#68d0ee" />
            </div>

            <h2>Determining the right cloud solution</h2>
          </div>
          <div style={{ borderLeft: "2px solid white" }}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div>
              <IoMdAnalytics size={50} color="#68d0ee" />
            </div>

            <h2>Enabling data systems and analytics</h2>
          </div>
        </div>
        <h1  style={{ color: "white", fontSize: "2.5rem", marginTop: "80px" }}>Why do clients choose AdvinGosys?</h1>
        <div style={{ display: "flex", justifyContent: "center" ,marginTop:"70px"}}>
          <CarouselCard slides={slideData}/>
        </div>
      </div>
    </div>
  );
};

export default DataAnalytics;
