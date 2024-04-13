import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Group, Burger, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './navbar.module.scss';
import { links } from './navlinks';

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  const checkScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  const location = useLocation();
  

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => {
        event.preventDefault();
      }}
    >
      {link.label}
    </a>
  ));

  return (
     <header className={`${classes.navbar} ${isScrolled ? classes.dark : '' || location.pathname != '/' ? classes.dark : ''}`}>
      <Container size="md" className={classes.inner}>
        <h1 className={classes.logo}>R O V E R</h1>
        <Group gap={5} visibleFrom="xs">
          {items}
          <Button variant="filled" color="var(--primary-color)" size="sm" radius="lg">Documentation</Button>
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}