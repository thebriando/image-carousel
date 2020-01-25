import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { WithLibrariesCarousel } from "./components/WithLibrariesCarousel/WithLibrariesCarousel";
import { images } from "./data/images.js";

function App() {
  return (
    <Router>
      <Route path="/with-libraries">
        <WithLibrariesCarousel items={images} />
      </Route>
    </Router>
  );
}

export default App;
