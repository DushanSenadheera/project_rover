import "./Duration.scss";
import { Link } from "react-router-dom";
import { NumberInput } from "@mantine/core";
import bg3 from "../../assets/bg3.png";

export default function Duration() {
  return (
    <div className="duration">
      <div className="duration-img">
        <img src={bg3} alt="" />
      </div>
      <div className="duration-form">
        <form>
          <h1>duration</h1>
          <p>Enter your duration</p>
          <br />
            <NumberInput
              withAsterisk
              placeholder="duration"
            />
        </form>
        <Link to='/budget'><button className="next secondary-btn">Next</button></Link>
      </div>
    </div>
  );
}
