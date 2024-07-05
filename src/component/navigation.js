import logo from "../assets/images/logo.svg"
import "./navigation.css"

function Navigation() {
    return (
      <div className="nav-container">
        <div className="navbar">
          <div className="logo">
              <img className="logo-img" src={logo} />
          </div>
          <div>
              <ul>
                <a href="./home">Home</a>
                <a href="./new">New</a>
                <a href="./popular">Popular</a>
                <a href="./trending">Trending</a>
                <a href="./categories">Categories</a>
              </ul>
          </div>
        </div>
      </div>
    );
  }

  export default Navigation
  // ../assets/images/logo.svg