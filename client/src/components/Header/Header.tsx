import {Link} from 'react-router-dom';
import cx from 'clsx';
import { Title, Button, Overlay } from '@mantine/core';
//import videoSource from '../../assets/bgvid.mp4';
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
          <Button className='secondary-btn' variant="white" size="lg">
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