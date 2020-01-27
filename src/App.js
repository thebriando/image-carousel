import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import { WithLibrariesCarousel } from "./components/WithLibrariesCarousel/WithLibrariesCarousel";
import { WithoutLibrariesCarousel } from "./components/WithoutLibrariesCarousel/WithoutLibrariesCarousel";
import { images } from "./data/images.js";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <Header />
        <Route exact path="/" render={() => <WithLibrariesCarousel items={images} />} />
        <Route path="/with-libraries" render={() => <WithLibrariesCarousel items={images} />} />
        <Route path="/without-libraries" render={() => <WithoutLibrariesCarousel items={images} />} />
      </HashRouter>
    </div>
  );
}

export default App;
