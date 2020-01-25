import React, { Component } from "react";
import { Container, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";

export class WithLibrariesCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      slides: [],
      animating: false
    };
  }
  componentDidMount() {
    const slides = this.props.items.map(item => {
      return (
        <CarouselItem
          onExiting={() => this.setAnimating(true)}
          onExited={() => this.setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
    this.setState({ slides: slides });
  }
  setAnimating = bool => {
    this.setState({ animating: bool });
  };
  next = () => {
    const currentIndex = this.state.activeIndex;
    this.setState({ activeIndex: currentIndex === this.props.items.length - 1 ? 0 : currentIndex + 1 });
  };
  previous = () => {
    const currentIndex = this.state.activeIndex;
    this.setState({ activeIndex: currentIndex === 0 ? this.props.items.length - 1 : currentIndex - 1 });
  };
  goToIndex = index => {
    this.setState({ activeIndex: index });
  };
  render() {
    const { activeIndex, slides } = this.state;
    return (
      <Container>
        <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
          <CarouselIndicators items={this.props.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </Container>
    );
  }
}
