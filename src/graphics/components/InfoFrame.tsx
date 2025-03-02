import React from "react";

const InfoFrame = () => {
  const name = "総研 太郎";
  const title = "LTタイトル";

  return (
    <div
      id="info-frame"
      style={{ display: "flex", columnGap: "3rem", alignItems: "center" }}
    >
      <div style={{ fontSize: "2rem" }}>{name}</div>
      <div style={{ fontSize: "3rem" }}>{title}</div>
    </div>
  );
};

export default InfoFrame;
