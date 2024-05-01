import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./budget.scss";
import { Link } from "react-router-dom";
import { TextInput } from "@mantine/core";
import bg2 from "../../assets/bg2.png";

export default function Budget() {

  const [budget, setBudget] = useState(0);
  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(Number(e.target.value));
  }

  const location = useLocation();
  const duration = location.search;

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
            onChange={handleData}
            value={budget}
            label="Maximum Budget"
            withAsterisk
            placeholder="USD"
            type="number"
          />
        </form>
        <Link to={{
            pathname: "/interests",
            search: `${duration}&budget=${budget}`
        }}><button className="next secondary-btn">Next</button></Link>
      </div>
    </div>
  );
}
