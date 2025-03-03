import React from "react";
import useReplicant from "../../hooks";

const InfoFrame = () => {
  const [ltList] = useReplicant("ltList");
  const [ltIdx] = useReplicant("ltIdx");

  const currentLT = ltList?.[ltIdx ?? 0] ?? { name: "hoge", title: "huga" };

  return (
    <div
      id="info-frame"
      style={{ display: "flex", columnGap: "3rem", alignItems: "center" }}
    >
      <div style={{ fontSize: "2rem" }}>{currentLT.name}</div>
      <div style={{ fontSize: "3rem" }}>{currentLT.title}</div>
    </div>
  );
};

export default InfoFrame;
