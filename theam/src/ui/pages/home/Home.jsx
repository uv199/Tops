import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import UpperCom from "./UpperCom";
import ExploreCom from "../../components/Explore/ExploreCom";

export default function Home() {
  return (
    <>
      <Header />
      <UpperCom />
      <ExploreCom />
      <Footer />
    </>
  );
}
