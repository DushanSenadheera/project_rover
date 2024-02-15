import { Text, Title, TextInput, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './Plan.module.scss';

export function Plan() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Travel Plan</Title>
        <Text fw={500} fz="lg" mb={5}>
          Plan your trip now in a minute!
        </Text>
        <Text fz="sm" c="dimmed">
          You will never miss important product updates, latest news and community QA sessions. Our
          newsletter is once a week, every Sunday.
        </Text>

        <div className={classes.controls}>
          <TextInput
            placeholder="Your Destination"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Link to='/destination'><Button className={classes.control}>Plan Now</Button></Link>
        </div>
      </div>
    </div>
  );
}