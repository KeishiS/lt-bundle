import React from "react";
import useReplicant from "../../hooks";

const LTList = () => {
  const [ltList] = useReplicant("ltList");
  const [ltIdx] = useReplicant("ltIdx");

  const onNext = () => {
    nodecg.sendMessage("nextIdx");
  };
  const onPrev = () => {
    nodecg.sendMessage("prevIdx");
  };
  const onReload = () => {
    nodecg.sendMessage("reloadJSON");
  };

  return (
    <div>
      <h1>発表者一覧</h1>
      <ol>
        {(ltList ?? []).map((lt, id) => (
          <li key={id} style={{ color: id === ltIdx ? "red" : "white" }}>
            Name: {lt.name}, title: {lt.title}
          </li>
        ))}
      </ol>
      <button onClick={onPrev}>Prev</button>
      <button onClick={onNext}>Next</button>
      <button onClick={onReload}>Reload</button>
    </div>
  );
};

export default LTList;
