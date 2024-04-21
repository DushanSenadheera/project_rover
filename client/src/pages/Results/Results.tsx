import "./Results.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading/Loading";

export default function Results() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/location")
      .then(function (res) {
        const locations = res.data.location;
        console.log(locations);
        setLoading(false);
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
          <h1>Results</h1>
          <p>Here are the results of your search...</p>
        </div>
      </div>
    );
  }
}
