import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <title>Bhavani Portfolio</title>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Resume />
    </div>
  );
}

export default App;
