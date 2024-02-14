import "./Destination.scss";
import { Link } from "react-router-dom";
import { TextInput } from "@mantine/core";
import bg from "../../assets/bg.png";

export default function Destination() {
  return (
    <div className="destination">
      <div className="destination-img">
        <img src={bg} alt="" />
      </div>
      <div className="destination-form">
        <form>
          <h1>Destination</h1>
          <p>Enter your destination</p>
          <br />
          <TextInput
            withAsterisk
            placeholder="Enter your destination"
          />
        </form>
        <Link to='/budget'><button className="next secondary-btn">Next</button></Link>
      </div>
    </div>
  );
}
