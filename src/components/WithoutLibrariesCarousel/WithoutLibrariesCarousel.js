import React, { Component } from "react";
import { Container } from "reactstrap";
import "./WithoutLibrariesCarousel.css";

export class WithoutLibrariesCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      transition: false
    };
  }
  next = () => {
    this.setState({ transition: false });
    const current = this.state.current;
    this.setState({ current: current === this.props.items.length - 1 ? 0 : current + 1, transition: true });
  };
  prev = () => {
    this.setState({ transition: false });
    const current = this.state.current;
    this.setState({ current: current === 0 ? this.props.items.length - 1 : current - 1, transition: true });
  };
  change = index => {
    this.setState({ transition: false });
    this.setState({ current: index, transition: true });
  };
  render() {
    const { current, transition } = this.state;
    let imgClass = "wo-libraries-image";
    transition && (imgClass += " transition");
    return (
      <Container>
        <img
          key={this.props.items[current].src}
          src={this.props.items[current].src}
          alt={this.props.items[current].alt}
          className={imgClass}
        />
        <div className="wo-libraries-navigation">
          <button className="carousel-button prev" onClick={this.prev}>
            &lt;
          </button>
          <button className="carousel-button next" onClick={this.next}>
            &gt;
          </button>
        </div>
        <div className="wo-libraries-selectors">
          {this.props.items.map((item, index) => {
            let btnClass = "carousel-button selector";
            if (index === current) {
              btnClass += " current";
            }
            return <button key={item.alt} className={btnClass} onClick={() => this.change(index)}></button>;
          })}
        </div>
      </Container>
    );
  }
}
