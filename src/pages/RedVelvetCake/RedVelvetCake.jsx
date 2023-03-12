import "./RedVelvetCake.scss";
import { Link } from "react-router-dom";

function RedVelvetCake() {
  return (
    <div className="cake">
      <div className="plate"></div>
      <div className="layer layer-bottom"></div>
      <div className="layer layer-middle"></div>
      <div className="layer layer-top"></div>
      <div className="icing"></div>
      <div className="drip drip1"></div>
      <div className="drip drip2"></div>
      <div className="drip drip3"></div>
      <div className="candle">
        <div className="flame"></div>
      </div>
      <Link to="/">
        <button className="btn btn-outline-primary" id="back-button">
          Back
        </button>
      </Link>
    </div>
  );
}

export default RedVelvetCake;
