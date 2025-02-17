import "./Navbar.css";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleScroll = (sectionId) => {
    navigate("/"); // Ensure you're on the Home page
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 0); // Delay ensures DOM is ready
  };

  return (
    <>
      <div className="navbar">
        <h1>AdvinGosys</h1>
        <ul>
          <li onClick={() => handleScroll("home")}>Home</li>
          <li onClick={() => handleScroll("services")}>Services</li>
          <li onClick={() => handleScroll("products")}>Products</li>
          <li onClick={() => handleScroll("industries")}>Industries</li>
          <li onClick={() => handleScroll("careers")}>Careers</li>
          <li onClick={() => handleScroll("contacts")}>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
