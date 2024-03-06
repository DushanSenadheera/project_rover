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
            <Chip color="black">Religous Places</Chip>
            <Chip color="black">Must See Attractions</Chip>
            <Chip color="black">Historical</Chip>
            <Chip color="black">Hidden Gems</Chip>
            <Chip color="black">Beaches</Chip>
            <Chip color="black">Tasty Foods</Chip>
            <Chip color="black">Viewpoints</Chip>
          </div>
        </form>
        <Link to='/results'><button className="next secondary-btn">Next</button></Link>
      </div>
    </div>
  );
}
