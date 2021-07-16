import React, { useState, useContext } from "react";
import FirebaseContext from "../context/firebase";
import UserContext from "../context/user";

export default function Header() {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

  console.log("user", user);
  return <h1>Header</h1>;
}