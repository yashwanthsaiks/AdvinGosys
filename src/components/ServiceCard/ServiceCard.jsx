import Img1 from "./Service-1.jpg";
import Img2 from "./Service-2.jpg";
import Img3 from "./Service-3.jpg";
import Img4 from "./Service-4.jpg";
import Img5 from "./Service-5.jpg";
import Img6 from "./Service-6.jpg";
import Img7 from "./Service-7.jpg";
import Img8 from "./Service-8.jpg";
import BusinessOperation from "../../Pages/Services/ServiceComponents/BusinessOperation";
import CloudInfrastructure from "../../Pages/Services/ServiceComponents/CloudInfrastructure";
import DataAnalytics from "../../Pages/Services/ServiceComponents/DataAnalytics";
import EngineeringServices from "../../Pages/Services/ServiceComponents/EngineeringServices";
import ITConsulting from "../../Pages/Services/ServiceComponents/ITConsulting";
import ITEnterpriseApplication from "../../Pages/Services/ServiceComponents/ITEnterpriseApplication";
import MedicalBilling from "../../Pages/Services/ServiceComponents/MedicalBilling";
import TestingQA from "../../Pages/Services/ServiceComponents/TestingQA";
import React, { useState } from "react";
import Card from "../Card/Card";

import "./ServiceCard.css";

const services = [
  {
    title: "IT Consulting",
    description:
      "Guiding businesses toward tech-driven success with expert consulting.",
    imageSrc: Img3,
    component: ITConsulting,
  },
  {
    title: "Medical Billing",
    description:
      "Streamlining medical billing for faster, error-free processes.",
    imageSrc: Img1,
    component: MedicalBilling,
  },
  {
    title: "IT Enterprise Application",
    description: "Empowering businesses with seamless digital solutions.",
    imageSrc: Img2,
    component: ITEnterpriseApplication,
  },
  {
    title: "Business Operation",
    description: "Optimizing operations for enhanced efficiency and growth.",
    imageSrc: Img4,
    component: BusinessOperation,
  },
  {
    title: "Data & Analytics",
    description: "Turning data into actionable insights for smarter decisions.",
    imageSrc: Img7,
    component: DataAnalytics,
  },
  {
    title: "Cloud and Infrastructure",
    description:
      "Building scalable, secure, and efficient cloud infrastructures.",
    imageSrc: Img5,
    component: CloudInfrastructure,
  },
  {
    title: "Testing & QA Assurance",
    description: "Ensuring quality and reliability in every line of code.",
    imageSrc: Img8,
    component: TestingQA,
  },
  {
    title: "Engineering Services",
    description: "Innovative engineering solutions for complex challenges.",
    imageSrc: Img6,
    component: EngineeringServices,
  },
];

const ServiceCard = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleReadMore = (service) => {
    setSelectedService(() => service.component); // Store the component reference
  };

  const handleBack = () => {
    setSelectedService(null); // Reset to show all cards
  };

  return (
    <div>
      {selectedService ? (
        <div className="back-button">
          <button onClick={handleBack}>Back</button>
          {React.createElement(selectedService)}
        </div>
      ) : (
        <div className="cardContainer">
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              onReadMore={() => handleReadMore(service)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
