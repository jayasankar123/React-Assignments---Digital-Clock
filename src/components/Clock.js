import { render } from "enzyme";
import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds()
    };
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">
          {`${
            this.state.hours % 12 < 10
              ? "0" + (this.state.hours % 12)
              : this.state.hours % 12
          }:${
            this.state.minutes < 10
              ? "0" + this.state.minutes
              : this.state.minutes
          }:${
            this.state.seconds < 10
              ? "0" + this.state.seconds
              : this.state.seconds
          } ${this.state.hours > 12 ? "PM" : "AM"}`}
        </h3>
      </div>
    );
  }
}
export default Clock;
