import "./budget.scss";
import { TextInput } from "@mantine/core";
import bg from "../../assets/bg.png";

export default function Budget() {
  return (
    <div className="budget">
      <div className="budget-img">
        <img src={bg} alt="" />
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
        <button className="next secondary-btn">Next</button>
      </div>
    </div>
  );
}
