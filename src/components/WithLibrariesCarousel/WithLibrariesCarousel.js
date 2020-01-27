import React from "react";
import { Container, UncontrolledCarousel } from "reactstrap";
import "./WithLibrariesCarousel.css";
export const WithLibrariesCarousel = (props) => {
  return (
    <Container className="carousel-container">
      <UncontrolledCarousel items={props.items} />
    </Container>
  );
};
