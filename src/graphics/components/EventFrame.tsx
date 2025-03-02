import React, { useState } from "react";

const EventFrame = () => {
  const [eventName, setEventName] = useState("LT event #01");

  nodecg.listenFor("updateEventName", (data: { eventName: string }) => {
    setEventName(data.eventName);
  });

  return (
    <div id="event-frame" className="flex justify-center items-center">
      <h1 style={{ fontSize: "3rem" }}>{eventName}</h1>
    </div>
  );
};

export default EventFrame;
