import React, { Component } from "react";
import { Container } from "reactstrap";
import "./WithoutLibrariesCarousel.css";

export class WithoutLibrariesCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }
  next = () => {
    const current = this.state.current;
    this.setState({ current: current === this.props.items.length - 1 ? 0 : current + 1 });
  };
  prev = () => {
    const current = this.state.current;
    this.setState({ current: current === 0 ? this.props.items.length - 1 : current - 1 });
  };
  change = index => {
    this.setState({ current: index });
  };
  render() {
    const { current } = this.state;
    return (
      <Container>
        <img src={this.props.items[current].src} alt={this.props.items[current].alt} className="wo-libraries-image" />
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
            let btnClass = "carousel-button";
            if (index === current) {
              btnClass += " current"
            }
            return (
              <button className={btnClass} onClick={() => this.change(index)}>
                {index + 1}
              </button>
            );
          })}
        </div>
      </Container>
    );
  }
}
