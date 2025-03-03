import React from "react";
import useReplicant from "../../hooks";

const EventInfo = () => {
  const [eventName, setEventName] = useReplicant("eventName");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventName(e.target.value);
  };

  const onClick = () => {
    nodecg.sendMessage("clearEventName");
  };

  return (
    <div>
      <p>イベント名: {eventName}</p>
      <input placeholder={eventName} onChange={onChange} />
      <button onClick={onClick}>Clear</button>
    </div>
  );
};

export default EventInfo;
