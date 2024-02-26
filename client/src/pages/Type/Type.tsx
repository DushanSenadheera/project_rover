import "./type.module.scss";
import { Link } from "react-router-dom";
import { Chip  } from "@mantine/core";
import bg4 from "../../assets/bg4.png";

export default function Type() {
  return (
    <div className="type">
      <div className="type-img">
        <img src={bg4} alt="" />
      </div>
      <div className="type-form">
        <form>
          <h1>type</h1>
          <p>Enter your type</p>
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
