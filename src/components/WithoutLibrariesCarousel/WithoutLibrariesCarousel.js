import React, { Component } from "react";
import "./WithoutLibrariesCarousel.css";

export class WithoutLibrariesCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }
  // Sets interval at 5000, so the picture changes every five seconds
  componentDidMount() {
    this.interval = setInterval(() => this.next(), 5000);
  }
  // Clears timer to prevent errors and memory leaks
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  // goes to next image, or first image if the current image is the last one
  next = () => {
    const current = this.state.current;
    this.setState({ current: current === this.props.items.length - 1 ? 0 : current + 1 });
  };
  // goes to previous image, or last image if the current image is the first one
  prev = () => {
    const current = this.state.current;
    this.setState({ current: current === 0 ? this.props.items.length - 1 : current - 1 });
  };
  // changes the current image
  change = index => {
    this.setState({ current: index });
  };
  render() {
    const { current } = this.state;
    const { items } = this.props;
    return (
      <div className="container wo-libraries-container">
        <div className="wo-libraries-carousel">
          <button className="prev-btn" onClick={this.prev}>
            &lt;
          </button>
          <img
            key={items[current].src}
            src={items[current].src}
            alt={items[current].alt}
            className="wo-libraries-image transition"
          />
          <button className="next-btn" onClick={this.next}>
            &gt;
          </button>
        </div>
        <div className="wo-libraries-selectors">
          {items.map((item, index) => {
            let btnClass = "carousel-selector";
            index === current && (btnClass += " current");
            return <button key={item.src} className={btnClass} onClick={() => this.change(index)}></button>;
          })}
        </div>
      </div>
    );
  }
}
