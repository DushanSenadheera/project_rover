import { Image, Card, Text, Group, Button, rem } from "@mantine/core";
import { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "@mantine/carousel";
import { IconStar } from "@tabler/icons-react";
import classes from "./Card.module.scss";

export default function Cards(props) {
  const [data, setData] = useState([]);
  // Add this line

  useEffect(() => {
    axios
      .post("http://localhost:8000/api/stay", {
        location: props.location,
      })
      .then(function (res) {
        setData(res.data.accomadations);
        console.log(res.data.accomadations);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return data.slice(-6).map((item) => (
    <Card w={350} radius="md" withBorder padding="xl">
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          <Carousel.Slide>
            <Image src={item.img1} height={220} />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image src={item.img2} height={220} />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image src={item.img3} height={220} />
          </Carousel.Slide>
        </Carousel>
      </Card.Section>

      <Group justify="space-between" mt="lg">
        <Text fw={500} fz="lg">
          {item.Name}
        </Text>

        <Group gap={5}>
          <IconStar style={{ width: rem(16), height: rem(16) }} />
          <Text fz="xs" fw={500}>
            {item.Rating}
          </Text>
        </Group>
      </Group>

      <Text fz="sm" c="dimmed" mt="sm">
        {item.Location}
      </Text>

      <Group justify="space-between" mt="md">
        <div>
          <Text fz="xl" span fw={500} className={classes.price}>
            USD {item.Price}
          </Text>
          <Text span fz="sm" c="dimmed">
            {" "}
            / night
          </Text>
        </div>

        <Button radius="md">Book now</Button>
      </Group>
    </Card>
  ));
}
