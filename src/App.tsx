import { useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/main";
import { About } from "./components/About";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";

function App() {
  return (
    <div className="bg-black/10">
      <Header />
      <Main />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
