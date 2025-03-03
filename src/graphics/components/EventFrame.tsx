import React from "react";
import useReplicant from "../../hooks";

const EventFrame = () => {
  const [eventName] = useReplicant("eventName");

  return (
    <div id="event-frame" className="flex justify-center items-center">
      <h1 style={{ fontSize: "3rem" }}>{eventName}</h1>
    </div>
  );
};

export default EventFrame;
