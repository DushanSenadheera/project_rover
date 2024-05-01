import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Duration.scss";
import { Link } from "react-router-dom";
import { NumberInput } from "@mantine/core";
import bg3 from "../../assets/bg3.png";

export default function Duration() {

  const [Duration, setDuration] = useState(1);
  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(Number(e.target.value));
  }

  const location = useLocation();
  const destination = location.search;
  
  
  return (
    <div className="duration">
      <div className="duration-img">
        <img src={bg3} alt="" />
      </div>
      <div className="duration-form">
        <form>
          <h1>duration</h1>
          <p>Enter your travel duration</p>
          <br />
            <NumberInput
              onChange={handleData}
              value={Duration}
              label="Travel Duration"
              withAsterisk
              placeholder="Days"
              min={1}
            />
        </form>
        <Link to={{
            pathname: "/budget",
            search: `${destination}&duration=${Duration}`
        }}><button className="next secondary-btn">Next</button></Link>
      </div>
    </div>
  );
}
