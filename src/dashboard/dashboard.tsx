import { createRoot } from "react-dom/client";
import React from "react";
import EventInfo from "./components/EventInfo";

const app = (
  <>
    <EventInfo />
  </>
);

createRoot(document.getElementById("app")!).render(app);
