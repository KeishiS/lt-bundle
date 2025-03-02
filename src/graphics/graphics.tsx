import { createRoot } from "react-dom/client";
import React from "react";
import InfoFrame from "./components/InfoFrame";

const app = (
  <>
    <div id="capture-frame"></div>
    <div id="comment-frame"></div>
    <div id="camera-frame"></div>
    <InfoFrame />
  </>
);

createRoot(document.getElementById("app")!).render(app);
