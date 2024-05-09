import { Image, Card, Text, Group, Button, rem } from "@mantine/core";
import { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "@mantine/carousel";
import { IconStar } from "@tabler/icons-react";
import classes from "./Eat.module.scss";
import img from "../../../../model/data/assets/pool-area.jpg";

export default function Eat(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:8000/api/food", {
        location: props.location,
      })
      .then(function (res) {
        setData(res.data.food);
        console.log(res.data.food);
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
            {
              item.Budget === "low" ? "$" : item.Budget === "medium" ? "$$" : "$$$"
            }
          </Text>
        </div>
      </Group>
    </Card>
  ));
}
