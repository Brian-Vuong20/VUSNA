import logo from "./logo.svg";
import "./index.css";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import EventDetails from "./components/EventDetails";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="body_container">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/event/details" element={<EventDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
