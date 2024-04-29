import { useState } from "react";
import "./Interests.scss";
import { Link } from "react-router-dom";
import { Chip  } from "@mantine/core";
import bg4 from "../../assets/bg4.png";

export default function interests() {
  
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleChipClick = (interest) => {
    setSelectedInterests([...selectedInterests, interest]);
  };
  console.log(selectedInterests)
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
            <Chip onClick={() => handleChipClick("Religous Places")} color="black">Religous Places</Chip>
            <Chip onClick={() => handleChipClick("Must See Attractions")} color="black">Must See Attractions</Chip>
            <Chip onClick={() => handleChipClick("Historical")} color="black">Historical</Chip>
            <Chip onClick={() => handleChipClick("Hidden Gems")} color="black">Hidden Gems</Chip>
            <Chip onClick={() => handleChipClick("Beaches")} color="black">Beaches</Chip>
            <Chip onClick={() => handleChipClick("Tasty Foods")} color="black">Tasty Foods</Chip>
            <Chip onClick={() => handleChipClick("Viewpoints")} color="black">Viewpoints</Chip>
          </div>
        </form>
        <Link to='/results'><button className="next secondary-btn">Next</button></Link>
      </div>
    </div>
  );
}
