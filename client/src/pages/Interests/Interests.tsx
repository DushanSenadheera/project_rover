import "./Interests.scss";
import { Link } from "react-router-dom";
import { Chip  } from "@mantine/core";
import bg4 from "../../assets/bg4.png";

export default function interests() {
  return (
    <div className="interests">
      <div className="interests-img">
        <img src={bg4} alt="" />
      </div>
      <div className="interests-form">
        <form>
          <h1>interests</h1>
          <p>Select your interests</p>
          <br />
          <div className="chips">
            <Chip color="gray">Religous Places</Chip>
            <Chip color="gray">Must See Attractions</Chip>
            <Chip color="gray">Historical</Chip>
            <Chip color="gray">Hidden Gems</Chip>
            <Chip color="gray">Beaches</Chip>
            <Chip color="gray">Tasty Foods</Chip>
            <Chip color="gray">Viewpoints</Chip>
          </div>
        </form>
        <Link to='/results'><button className="next secondary-btn">Next</button></Link>
      </div>
    </div>
  );
}
