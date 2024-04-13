import "./about.scss";
import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <div className="about">
      <h3 className="sub-heading">What is ROVER?</h3>
      <Fade direction="up">
      <p>
        Welcome to ROVER – Your Ultimate Travel Companion! Embark
        on a journey of unparalleled exploration with us, as our platform offers
        personalized travel recommendations tailored just for you. Whether
        you're a seasoned globetrotter or a first-time adventurer, ROVER 
        is designed to elevate your travel experience to new
        heights. Discover hidden gems and must-visit locations that align
        perfectly with your unique travel style through our advanced
        recommendation engine. Our user-friendly interface ensures seamless navigation through the
        world of travel. Easily create and customize itineraries, read real
        traveler reviews, and stay updated with the latest travel trends. Join
        ROVER to unleash the explorer within and let us guide you
        to extraordinary destinations and unforgettable experiences. The world
        is waiting – start your adventure now!
      </p>
      </Fade>
    </div>
  );
}
