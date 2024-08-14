import { useRouter } from 'next/router';
import { FaGoogle } from 'react-icons/fa'; // Import the Font Awesome Google icon
import Link from 'next/link'; // Import Link from next
import '../style/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS bundle (with Popper.js)

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-brand" href="#">URLScissors</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/" passHref>
                  <div className="nav-link">Home</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" passHref>
                  <div className="nav-link">About Us</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/pricing" passHref>
                  <div className="nav-link">API Pricing</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/register" passHref>
                  <div className="nav-link">Register</div>
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;