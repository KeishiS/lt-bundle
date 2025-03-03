import { createRoot } from "react-dom/client";
import React from "react";
import EventInfo from "./components/EventInfo";
import LTList from "./components/LTList";
import CommentsOp from "./components/CommentsOp";

const app = (
  <>
    <EventInfo />
    <LTList />
    <CommentsOp />
  </>
);

createRoot(document.getElementById("app")!).render(app);
