import "./Results.scss";
import { Carousel } from "@mantine/carousel";
import { Accordion } from "@mantine/core";
import bg from "../../assets/bg.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import Cards from "../../components/Card/Cards";

const groceries = [
  {
    emoji: "Day 1",
    value: "Galle",
    description:
      "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
  },
  {
    emoji: "Day 2",
    value: "Bananas",
    description:
      "Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.",
  },
  {
    emoji: "Day 3",
    value: "Broccoli",
    description:
      "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
  },
];

export default function Results() {
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/api/location")
  //     .then(function (res) {
  //       const locations = res.data.location;
  //       console.log(locations);
  //       setLoading(false);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // } else {
  return (
    <div>
      <div className="results-content">
        <h1>Galle</h1>
        <small>Southern Province, Sri Lanka</small>
        <Carousel withIndicators height={400}>
          <Carousel.Slide>
            <img src={bg} alt="bg" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={bg} alt="bg" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={bg} alt="bg" />
          </Carousel.Slide>
        </Carousel>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam qui
          porro quis magnam assumenda veniam perferendis tempora tempore autem
          incidunt, ad suscipit, dolorem unde sed corporis eligendi et veritatis
          repellat?
        </p>
        <div className="plan">
          <h1>Travel Plan</h1>
          <Accordion defaultValue="Apples">{items}</Accordion>
        </div>
        <div className="stay">
          <h1>Stay</h1>
          <div className="stay-content">
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
        <div className="stay">
          <h1>Eat</h1>
          <div className="stay-content">
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
}
// }
