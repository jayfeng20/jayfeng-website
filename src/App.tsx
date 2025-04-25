import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
