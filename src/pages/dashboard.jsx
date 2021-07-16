import React from "react";
import { Header, Timeline, Sidebar } from "../components";

export default function dashboard() {
  return (
    <>
      <Header />
      <div className="grid">
        <Timeline />
        <Sidebar />
      </div>
    </>
  );
}
