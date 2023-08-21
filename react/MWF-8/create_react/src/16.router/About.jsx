import React from "react";
import { Outlet } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <Outlet />
    </>
  );
}
