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
          <TextInput
            label="Budget"
            withAsterisk
            description="Enter your minimum budget"
            error="Please enter your minimum budget"
            placeholder="Input placeholder"
          />
          <TextInput
            label="Budget"
            withAsterisk
            description="Enter your minimum budget"
            error="Please enter your minimum budget"
            placeholder="Input placeholder"
          />
        </form>
      </div>
    </div>
  );
}
