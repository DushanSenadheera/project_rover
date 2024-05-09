import "./Results.scss";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { Accordion } from "@mantine/core";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import Cards from "../../components/Card/Cards";
import { Carousel } from "@mantine/carousel";
import Eat from "../../components/Eat/Eat";

export default function Results() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([{}]);

  const location = useLocation();
  const result = queryString.parse(location.search);

  useEffect(() => {
    axios
      .post("http://localhost:8000/api/location", {
        location: result.destination,
        budget: result.budget,
        duration: result.duration,
        interests: result.interests,
      })
      .then(function (res) {
        console.log(res.data);
        setLoading(false);
        setData(res.data);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <div className="results-content">
          <h1>{result.destination}</h1>
          <small>Southern Province, Sri Lanka</small>
          <br />
          <p>
            The Southern Province of Sri Lanka is known for its rich cultural
            heritage and breathtaking natural landscapes. This region, which
            encompasses the districts of Galle, Matara, and Hambantota, offers a
            diverse tapestry of attractions ranging from lush green tea estates
            and pristine beaches to ancient temples and colonial fortresses.
            Galle, the provincial capital, is famous for its well-preserved
            17th-century Dutch fort, a UNESCO World Heritage Site, which
            encapsulates the fusion of European architecture and South Asian
            traditions. Inside the fort's walls, you can find an array of
            boutique shops, art galleries, and cafes. Matara is known for its
            robust fishing industry and vibrant markets. The area's coastline is
            dotted with idyllic beaches like Polhena and Mirissa, the latter
            being a popular spot for whale watching. Matara's historical
            significance is highlighted by the ancient temples and the old Dutch
            fort that overlooks the ocean. Hambantota, to the east, has been
            rapidly developing and is known for its salt pans and wildlife
            sanctuaries. The Yala National Park, part of which lies within the
            province, is one of the best places in Asia to see wild elephants,
            leopards, and a variety of birds. The Southern Province is also
            celebrated for its traditional dance forms, such as the devil dance,
            and its spicy seafood cuisine, which reflects the abundant marine
            resources of the area. This region offers a compelling blend of
            natural beauty, history, and culture, making it a must-visit
            destination in Sri Lanka.
          </p>
          <div className="plan">
            <br />
            <h1>Travel Plan</h1>
            <p>
              May your journey be filled with enchanting sights, delightful
              discoveries, and moments that take your breath away. Enjoy every
              step of the way!
            </p>
            <Accordion defaultValue={"Day 1"}>
              {data.map((item, key) => (
                <Accordion.Item key={key} value={`Day ${item.Day}`}>
                  <Accordion.Control>
                    {" "} 
                    <h3>Day {item.Day}</h3>{" "}
                  </Accordion.Control>
                  <Accordion.Panel>
                    <div className="plan-details">
                      {item.Locations.map((location, index) => (
                        <div key={index} style={{marginTop: '1.5rem'}}>
                          <h3>{location.Title}</h3>
                          <small>{location.Location}</small>,{" "}
                          <small>{location.Category}</small>
                          <Carousel withIndicators height={600}>
                            <Carousel.Slide>
                              <img src={location.img1} alt="bg" />
                            </Carousel.Slide>
                            <Carousel.Slide>
                              <img src={location.img2} alt="bg" />
                            </Carousel.Slide>
                            <Carousel.Slide>
                              <img src={location.img3} alt="bg" />
                            </Carousel.Slide>
                          </Carousel>
                          <p>{location.Description}</p>
                        </div>
                      ))}
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
          <br />
          <div className="stay">
            <h1>Stay</h1>
            <p>
              Your accommodations are a sanctuary where comfort and elegance
              intertwine, offering a haven of tranquility during your travels
            </p>
            <div className="stay-content">
              <Cards location={result.destination} />
            </div>
          </div>
          <br />
          <div className="stay">
            <h1>Eat</h1>
            <p>
              Indulge in the culinary delights of this enchanting destination,
              where each meal is a symphony of flavors, a dance of spices, and a
              celebration of local culture
            </p>
            <div className="stay-content">
              <Eat location={result.destination} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
