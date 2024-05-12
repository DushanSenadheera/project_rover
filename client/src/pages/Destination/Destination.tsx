import { useState } from "react";
import "./Destination.scss";
import { Link } from "react-router-dom";
import { TextInput } from "@mantine/core";
import bg from "../../assets/bg.png";
import UserInputLayout from "../../layouts/userInputLayout/UserInputLayout";
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';

export default function Destination() {

  const [destination, setDestination] = useState("");
  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDestination(e.target.value);
  }

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
    },

    validate: {
      name: isNotEmpty('Name cannot be empty')
    },
  });

  return (
    <UserInputLayout bg={bg}>
      <form onSubmit={form.onSubmit(() => {})}>
        <h1>Destination</h1>
        <TextInput key={form.key('name')}
        {...form.getInputProps('name')} onChange={handleData} label="Enter your destination" value={destination} withAsterisk placeholder="City Name" />
      </form>
      <Link to={{
        pathname: "/duration",
        search: `?destination=${destination}`
      }}>
        <button className="next secondary-btn">Next</button>
      </Link>
    </UserInputLayout>
  );
}
