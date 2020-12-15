import React from "react";
import "./index.css";

import Header from "../../components/Header/index";
import Section from "../../components/Section/index";
import Tabela from "../../components/Tabela/index";
import Footer from "../../components/Footer/index";

function LandingPage() {
  return (
    <>
      <Header />
      <section>
        <Section />
      </section>
      <Tabela />
      <Footer />
    </>
  );
}

export default LandingPage;
