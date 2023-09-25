import { useState } from "react";
import { Footer, Blog, Features, Header, Possibility, WhatGPT3 } from "./container";
import { CTA, Brand, Navbar } from "./components";
import "./app.css";

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
