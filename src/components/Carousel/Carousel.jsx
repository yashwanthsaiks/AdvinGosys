import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./Carousel.css";

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <div className="image-container">
            <img src={require("./Main-1.jpg")} alt="Slide 1" />
            <div className="slide-text">
              <h1>Unmatched Core to Experience Transformation</h1>
              <br />
              <p>
                Advingosys is a new kind of technology consulting company. We
                help businesses transform – from core to experience – to thrive
                in the marketplace of the future. With a unique blend of the
                engineering DNA with experience DNA, Advigosys helps businesses
                get to the future, faster.
              </p>
            </div>
          </div>
        </div>
        <div className="embla__slide">
          <div className="image-container">
            <img src={require("./Main-2.jpg")} alt="Slide 2" />
            <div className="slide-text">
              <h1>
                AdvinGosys Unleashing the power of Cognitive & Generative AI for
                IT Enterprise
              </h1>
              <br />
              <p>
                Our promise to help enterprises across industries transform at
                speed and bring agility, resilience, and efficiency to their
                businesses.
              </p>
            </div>
          </div>
        </div>
        <div className="embla__slide">
          <div className="image-container">
            <img src={require("./Main-3.jpg")} alt="Slide 3" />
            <div className="slide-text">
              <h1>ADVINGOSYS ARTIFICIAL INTELLIGENCE</h1>
              <br />
              <p>
                AdvinGosys is a simple to use AI platform that enables
                organizations to develop and deploy Cognitive powered Digital
                Application at Scale.
              </p>
            </div>
          </div>
        </div>
        <div className="embla__slide">
          <div className="image-container">
            <img src={require("./Main-4.jpg")} alt="Slide 3" />
            <div className="slide-text">
              <h1>ADVINGOSYS QUALITY ENGINEERING</h1>
              <br />
              <p>
                AdvinGosys Quality Engineering is reimagining quality so you can
                continue to reinvent your business with speed, reliability, and
                predictability. Our “always on” end-to-end automation approach
                will infuse quality and speed to enable faster technology
                changes and world-class experiences
              </p>
            </div>
          </div>
        </div>
        <div className="embla__slide">
          <div className="image-container">
            <img src={require("./Main-5.jpg")} alt="Slide 3" />
            <div className="slide-text">
              <h1>
                Harness disruptive tech to put your business at the forefront
              </h1>
              <br />
              <p>
                Data and AI | Immersive Experiences | Blockchain | Fast Code |
                Cloud Ops | Cybersecurity | Engineering | Digital Experience
                Platforms | Digital Performance | Internet of Things | Quality
                Engineering |
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
