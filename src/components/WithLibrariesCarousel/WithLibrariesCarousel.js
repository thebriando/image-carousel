import React from "react";
import { Container, UncontrolledCarousel } from "reactstrap";
import "./WithLibrariesCarousel.css";
export const WithLibrariesCarousel = (props) => {
  return (
    <Container>
      <UncontrolledCarousel items={props.items} />
    </Container>
  );
};
