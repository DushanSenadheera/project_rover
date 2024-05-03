import "./Results.scss";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { Accordion } from "@mantine/core";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import Cards from "../../components/Card/Cards";
import CarouselContent from "../../components/Carousel/CarouselContent";
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
          <div className="plan">
            <br />
            <h1>Travel Plan</h1>
            <Accordion defaultValue="Apples">
              {
                data.map((item, key) => (
                  <Accordion.Item key={key} value={'item.Day'}>
                    <Accordion.Control>Day {item.Day}</Accordion.Control>
                    <Accordion.Panel>
                      <div>
                      {item.Locations.map((location, index) => (
                        <div key={index}>
                          <h3>{location.Title}</h3>
                          <small>{location.Category}</small>
                        </div>
                      ))}
                      </div>
                    </Accordion.Panel>
                  </Accordion.Item>
                ))
              }
            </Accordion>
          </div>
          <br />
          <div className="stay">
            <h1>Stay</h1>
            <div className="stay-content">
              <Cards location={result.destination}/>
            </div>
          </div>
          <br />
          <div className="stay">
            <h1>Eat</h1>
            <div className="stay-content">
              <Eat location={result.destination} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
