import { Text, Title, TextInput, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './Plan.module.scss';
import { Fade } from "react-awesome-reveal";

export function Plan() {
  return (
    <div className={classes.wrapper} id='plan'>
      <Fade direction="left">
      <div className={classes.body}>
        <Title className={classes.title}>Plan your trip now in a minute!</Title>
        <Text c={'white'} fz="sm">
          You will never miss important product updates, latest news and community QA sessions. Our
          newsletter is once a week, every Sunday.
        </Text>

        <div className={classes.controls}>
          <TextInput
            placeholder="Your Destination"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Link to='/destination'><Button bg={'#1e1e1e'} className={classes.control}>Plan Now</Button></Link>
        </div>
      </div>
      </Fade>
    </div>
  );
}