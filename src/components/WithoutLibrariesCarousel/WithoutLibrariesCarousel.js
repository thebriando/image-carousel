import React, { Component } from "react";
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
    const current = this.state.current;
    this.setState({ current: current === this.props.items.length - 1 ? 0 : current + 1 });
  };
  prev = () => {
    const current = this.state.current;
    this.setState({ current: current === 0 ? this.props.items.length - 1 : current - 1 });
  };
  change = index => {
    this.setState({ current: index, transition: true });
  };
  render() {
    const { current } = this.state;
    return (
      <div className="container wo-libraries-container">
        <div className="wo-libraries-carousel">
          <button className="prev-btn" onClick={this.prev}>
            &lt;
          </button>
          <img
            key={this.props.items[current].src}
            src={this.props.items[current].src}
            alt={this.props.items[current].alt}
            className="wo-libraries-image transition"
          />
          <button className="next-btn" onClick={this.next}>
            &gt;
          </button>
        </div>
        <div className="wo-libraries-selectors">
          {this.props.items.map((item, index) => {
            let btnClass = "carousel-selector";
            if (index === current) {
              btnClass += " current";
            }
            return <button key={item.alt} className={btnClass} onClick={() => this.change(index)}></button>;
          })}
        </div>
      </div>
    );
  }
}
