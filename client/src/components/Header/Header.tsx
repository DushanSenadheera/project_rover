import {Link} from 'react-router-dom';
import { Title, Button, Overlay } from '@mantine/core';
import classes from './header.module.scss';

export function Header() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.8} zIndex={1} />

      <div className={classes.inner}>
        <Title size={98} lh={1} className={classes.title}>
          Your Adventure <br /> Begins Here
        </Title>
        <div className={classes.controls}>
          <Button variant="light" color="rgba(255, 255, 255, 1)" radius="md">
            Learn More
          </Button>
          <Link to='/destination'><Button variant="light" color="rgba(255, 255, 255, 1)" radius="md">
            Start
          </Button></Link>
        </div>
      </div>
    </div>
  );
}