import CarouselCard from "../../../components/CarouselCard/CarouselCard";
import img1 from "../../../components/ServiceCard/Service-1.jpg";
import img2 from "../../../components/ServiceCard/Service-2.jpg";
import img3 from "../../../components/ServiceCard/Service-3.jpg";

const ITConsulting = () => {
  const slideData = [
    {
      image: img1,
      title: "Experience design",
      description:
        "Every journey begins with an idea. Turning that vision into reality requires crafting tangible solutions, not just delivering presentations. We take your concepts, break them down into practical components.",
    },
    {
      image: img2,
      title: "Domain advisory",
      description:
        "Being a great consultant means knowing what works and what doesn't. This type of knowledge and precision can only come from collecting, analyzing, and interpreting data from real-world industry solutions.",
    },
    {
      image: img3,
      title: "Technology advisory",
      description:
        "To change the way your business looks, you need to change the way you look at your business. When our consultants come together to tackle a big challenge, they bring deep domain expertise .",
    },
  ];

  return (
    <div className="Primary-container" style={{ margin: "25px 0" }}>
      <h1 style={{ color: "white", fontSize: "3rem", marginBottom: "50px" }}>
        AdvinGosys IT Consulting
      </h1>
      <p style={{ color: "white", fontSize: "1.4rem" }}>
        <b>
          Growing a business takes more than just ideas—it requires actionable
          solutions. Advingosys recognizes the vital link between cutting-edge
          technology and tangible business success. Solving real-world
          challenges goes beyond offering advice; it demands committed
          consultants who guide you in bridging the gap between disruptive
          innovations and measurable outcomes.
          <br />
          <br /> From AI and digital consulting to experience design and
          sustainability services, we leverage real-world data to transform
          ideas into competitive advantages.
          <br />
          <br /> At Advingosys, we believe the best consultants think like
          engineers. While anyone can generate ideas, bringing them to life
          requires a scientific, results-driven approach. That’s why we take an
          Engineering First approach to consulting. Our consultants work closely
          with engineers, fully immersed in solving your most complex
          challenges. From ideation to execution, we’re with you every step of
          the way, ensuring your vision becomes reality. At Advingosys, we don’t
          just propose solutions—we engineer them.
        </b>
      </p>
      <br />

      <br />
      <h1 style={{ fontSize: "2.5rem", marginTop: "50px" }}>
        <b>
          AdvinGosys helps deliver better business outcomes that accelerate ROI{" "}
        </b>
      </h1>
      <p style={{ color: "white", fontSize: "1.2rem" }}>
        <b>
          Our solutions foster collaboration, enhance efficiency, and empower
          teams through:
        </b>
      </p>

      <div style={{ marginTop: "100px" }}>
        <CarouselCard slides={slideData} />
      </div>
    </div>
  );
};

export default ITConsulting;
