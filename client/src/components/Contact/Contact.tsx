import {
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    ActionIcon,
  } from '@mantine/core';
  import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
  import { ContactIconsList } from './ContactIcon';
  import classes from './contact.module.scss';
  import { Fade } from "react-awesome-reveal";
  
  const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];
  
  export function Contact() {
    const icons = social.map((Icon, index) => (
      <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
        <Icon size="1.4rem" stroke={1.5} />
      </ActionIcon>
    ));
  
    return (
      <div className={classes.wrapper} id='contact'>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <div>
            <Title className={classes.title}>Contact us</Title>
            <Text c={'white'} className={classes.description} mt="sm" mb={30}>
              Leave your email and we will get back to you soon
            </Text>
  
            <ContactIconsList />
  
            <Group mt="xl">{icons}</Group>
          </div>
          <Fade direction="right">
          <div className={classes.form}>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Name"
              placeholder="John Doe"
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Your message"
              placeholder="I want to order your goods"
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
  
            <Group justify="flex-end" mt="md">
              <Button bg={'#1e1e1e'} className={classes.control}>Send message</Button>
            </Group>
          </div>
          </Fade>
        </SimpleGrid>
      </div>
    );
  }