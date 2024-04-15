import "./Destination.scss";
import { Link } from "react-router-dom";
import { TextInput } from "@mantine/core";
import bg from "../../assets/bg.png";
import UserInputLayout from "../../layouts/userInputLayout/userInputLayout";

export default function Destination() {
  return (
    <UserInputLayout bg={bg}>
      <form>
        <h1>Destination</h1>
        <TextInput label="Enter your destination" withAsterisk placeholder="City Name" />
      </form>
      <Link to="/duration">
        <button className="next secondary-btn">Next</button>
      </Link>
    </UserInputLayout>
  );
}
