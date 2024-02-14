import {Link} from 'react-router-dom';
import cx from 'clsx';
import { Title, Button, Overlay } from '@mantine/core';
import classes from './header.module.scss';

export function Header() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.8} zIndex={1} />

      <div className={classes.inner}>
        <Title size={98} className={classes.title}>
          Your Adventure <br /> begins Here
        </Title>
        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            Learn More
          </Button>
          <Link to='/destination'><Button className={cx(classes.control, classes.secondaryControl)} size="lg">
            Start
          </Button></Link>
        </div>
      </div>
    </div>
  );
}