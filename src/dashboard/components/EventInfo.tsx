import React, { useState } from "react";

const EventInfo = () => {
  const [eventName, setEventname] = useState<string>("LT event #01");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventname(e.target.value);
  };

  const onClick = () => {
    nodecg.sendMessage("updateEventName", { eventName });
  };

  return (
    <div>
      <input placeholder={eventName} onChange={onChange} />
      <button onClick={onClick}>更新</button>
    </div>
  );
};

export default EventInfo;
