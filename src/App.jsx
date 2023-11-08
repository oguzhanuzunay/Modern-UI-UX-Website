import { Footer, Blog, Features, Header, Possibility, WhatGPT3 } from "./container";
import { CTA, Brand, Navbar } from "./components";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Possibility />
      <Features />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
