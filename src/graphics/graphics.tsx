import { createRoot } from "react-dom/client";
import React from "react";
import InfoFrame from "./components/InfoFrame";
import CommentFrame from "./components/CommentFrame";

const app = (
  <>
    <div id="event-frame"></div>
    <div id="capture-frame"></div>
    <CommentFrame />
    <div id="camera-frame"></div>
    <InfoFrame />
  </>
);

createRoot(document.getElementById("app")!).render(app);
