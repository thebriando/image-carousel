import React, { Component } from "react";
import { Container, UncontrolledCarousel } from "reactstrap";
import "./WithLibrariesCarousel.css";
export const WithLibrariesCarousel = () => {
  return (
    <Container>
      <UncontrolledCarousel items={this.props.items} />
    </Container>
  );
};
