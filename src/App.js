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
      <HashRouter basename='/'>
        <Header />
        <Route exact path="/">
          <WithLibrariesCarousel items={images} />
        </Route>
        <Route path="/with-libraries">
          <WithLibrariesCarousel items={images} />
        </Route>
        <Route path="/without-libraries">
          <WithoutLibrariesCarousel items={images} />
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
