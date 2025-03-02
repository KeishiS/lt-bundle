import { createRoot } from "react-dom/client";
import React from "react";
import InfoFrame from "./components/InfoFrame";
import CommentFrame from "./components/CommentFrame";
import EventFrame from "./components/EventFrame";

const app = (
  <>
    <EventFrame />
    <div id="capture-frame"></div>
    <CommentFrame />
    <div id="camera-frame"></div>
    <InfoFrame />
  </>
);

createRoot(document.getElementById("app")!).render(app);
