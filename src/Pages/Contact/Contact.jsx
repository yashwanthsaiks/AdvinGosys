import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import "./Contact.css"
const Contact =()=>{
    return(
        <div className="container-six">
        <div className="container-six-a">
          <h1>Join our team.</h1>
          <p>
            <b>Realise your potential</b>
          </p>
          <button>Explore</button>
        </div>
        <div class="horizontal-line"></div>
        <div className="container-six-b">
          <h4>SOCIAL</h4>
          <h1>Follow us for the latest updates</h1>
        </div>
        <div className="container-six-c">
          <div className="container-facebook">
            <div>
              <FaFacebook size={40} />
            </div>
          </div>
          <div className="container-linkedin">
            <div>
              <FaLinkedin size={40} />
            </div>
          </div>
          <div className="container-x">
            <div>
              <BsTwitterX size={40} />
            </div>
          </div>
          <div className="container-insta">
            <div>
              <BsInstagram size={40} />
            </div>
          </div>
        </div>
      </div>
    )
}
export default Contact;