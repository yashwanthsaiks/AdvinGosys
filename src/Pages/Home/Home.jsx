import "./Home.css";
import Product from "../Product&Platforms/Product";
import Services from "../Services/Services";
import Industries from "../Industries/Industries";
import Careers from "../Careers/Careers";
import Contact from "../Contact/Contact";

import Carousel from "../../components/Carousel/Carousel";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div id="home" className="container-one">
        <Carousel />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="products">
        <Product />
      </div>
      <div id="industries">
        <Industries />
      </div>
      <div id="careers">
        <Careers />
      </div>
      <div id="contacts">
        <Contact />
      </div>
    </div>
  );
};
export default Home;
