import React, { useEffect } from "react";

export default function User() {
  useEffect(() => {
    for (let i = 0; i < 1000000000; i++) {}
  }, []);
  return <h1>User</h1>;
}
