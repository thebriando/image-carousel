import React, { Component } from "react";
import { Container, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";
import "./WithLibrariesCarousel.css"
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
          // onExiting={() => this.setAnimating(true)}
          // onExited={() => this.setAnimating(false)}
          key={item.src}
        >
          <img className="carousel-image" src={item.src} alt={item.altText} />
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
    if (this.state.animating) return;
    const currentIndex = this.state.activeIndex;
    this.setState({ activeIndex: currentIndex === this.props.items.length - 1 ? 0 : currentIndex + 1 });
  };
  previous = () => {
    if (this.state.animating) return;
    const currentIndex = this.state.activeIndex;
    this.setState({ activeIndex: currentIndex === 0 ? this.props.items.length - 1 : currentIndex - 1 });
  };
  goToIndex = index => {
    if (this.state.animating) return;
    this.setState({ activeIndex: index });
  };
  render() {
    const { activeIndex, slides } = this.state;
    return (
      <Container className="carousel-container">
        <Carousel className="carousel" activeIndex={activeIndex} next={this.next} previous={this.previous} interval={false} >
          <CarouselIndicators items={this.props.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </Container>
    );
  }
}
