import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import HomePage from "./components/HomePage";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <a id="top" />
      <Navbar />
      <main>
        <div
          className="flex flex-col"
          style={{ height: "100vh", paddingTop: "80px", boxSizing: "border-box" }}
        >
          <Hero />
          <Grid />
        </div>
        <HomePage />
      </main>
    </div>
  );
}
