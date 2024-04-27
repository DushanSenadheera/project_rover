import { Carousel } from "@mantine/carousel";
import bg from "../../assets/bg.png";
import bg2 from "../../assets/bg2.png";

export default function CarouselContent() {
  return (
    <Carousel withIndicators height={400}>
      <Carousel.Slide>
        <img src={bg} alt="bg" />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src={bg2} alt="bg" />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src={bg} alt="bg" />
      </Carousel.Slide>
    </Carousel>
  );
}
