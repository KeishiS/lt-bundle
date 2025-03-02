import React from "react";

const InfoFrame = () => {
  const name = "総研 太郎";
  const title = "LTタイトル";

  return (
    <div
      id="info-frame"
      style={{ display: "flex", columnGap: "40px", alignItems: "center" }}
    >
      <div style={{ fontSize: "xx-large" }}>{name}</div>
      <div style={{ fontSize: "xxx-large" }}>{title}</div>
    </div>
  );
};

export default InfoFrame;
