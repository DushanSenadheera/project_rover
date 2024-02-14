import "./budget.scss";
import { Link } from "react-router-dom";
import { TextInput } from "@mantine/core";
import bg2 from "../../assets/bg2.png";

export default function Budget() {
  return (
    <div className="budget">
      <div className="budget-img">
        <img src={bg2} alt="" />
      </div>
      <div className="budget-form">
        <form>
          <h1>Budget</h1>
          <p>Enter your budget</p>
          <br />
          <TextInput
            withAsterisk
            placeholder="Enter your maximum budget"
          />
          <br />
          <TextInput
            withAsterisk
            placeholder="Enter your minimum budget"
          />
        </form>
        <Link to='/interests'><button className="next secondary-btn">Next</button></Link>
      </div>
    </div>
  );
}
