import {Link} from 'react-router-dom';
import { Title, Button, Overlay } from '@mantine/core';
import classes from './header.module.scss';
import { Fade } from "react-awesome-reveal";

export function Header() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.8} zIndex={1} />

      <div className={classes.inner}>
      <Fade direction='down'><Title size={98} lh={1} className={classes.title}>
          Your Adventure <br /> Begins Here
        </Title></Fade>
        <div className={classes.controls}>
          <Fade direction='up'>
          <Link to='/destination'><Button variant="light" color="rgba(255, 255, 255, 1)" radius="md">
            Start Now
          </Button></Link>
          </Fade>
        </div>
      </div>
    </div>
  );
}