import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Trip Easy</h1>
          <p>Choose your favourite destination</p>
        </div>
        <div>
        <Link className="social" to="#">
          <i class="fa-brands fa-facebook-square"></i>Facebook
        </Link>
        <Link className="social" to="#">
          <i class="fa-brands fa-instagram-square"></i>Instagram
        </Link>
        <Link className="social" to="#">
          <i class="fa-brands fa-behance-square"></i>Behance
        </Link>
        <Link className="social" to="#">
          <i class="fa-brands fa-twitter-square"></i>Twitter
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer