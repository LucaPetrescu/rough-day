import "./Homepage.module.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="container">
      <div>
        <h1>Rought day at work? Pick something to cheer yourself up!</h1>
      </div>

      <div className="buttons-container">
        <Link to="red-velvet-cake">
          <button className="btn btn-outline-primary" id="button1">
            Red Velvet Cake
          </button>
        </Link>
        <Link to="poenies">
          <button className="btn btn-outline-primary" id="button2">
            Peonies
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
