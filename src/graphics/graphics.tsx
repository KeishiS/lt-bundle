import { createRoot } from "react-dom/client";
import React from "react";

const app = (
  <>
    <div id="capture-frame"></div>
    <div id="comment-frame"></div>
    <div id="presenter-frame"></div>
  </>
);

createRoot(document.getElementById("app")!).render(app);
