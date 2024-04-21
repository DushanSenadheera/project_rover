import "./Loading.scss";
import { Loader } from "@mantine/core";

export default function Loading() {
  return (
    <div className="Loading">
      <div className="load-content">
        <Loader color="blue" size="xl" />
        <p>Please wait, your request is still processing...</p>
      </div>
    </div>
  );
}
