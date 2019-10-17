import React from "react";
import { Container, Row, Col } from "react-grid-system";
import { spacer1, spacer2 } from "../constants";

function formatTime(time) {
  // Check that time is a number
  if (typeof time != "number")
    throw new Error(
      'Invalid event time: "' + time + '". Must be a number, not a string.'
    );

  // Check that time is military
  let timeString = time.toString();
  if (timeString.length != 4)
    // Select last four digits
    timeString = ("000" + timeString).substr(-4);
    
    // throw new Error(
    //   "Invalid event time: " + time + ". Must be military time (e.g. 1200)."
    // );

  let hour = Number(timeString.substring(0, 2));
  let min_tens = Number(timeString.substring(2, 3));
  let min_ones = Number(timeString.substring(3, 4));

  // Determine if AM or PM
  if (Number(timeString) == 2400)
    timeString = 0;
  let ampm = Number(timeString) <= 1159 ? "AM" : "PM";

  return hour <= 12 ? hour + ":" + min_tens + min_ones + ampm : hour - 12 + ":" + min_tens + min_ones + ampm;
}

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];

function formatDate(dateInt) {
  let dateStr = String(dateInt);
  dateStr = `${dateStr.substring(0, 4)}-${dateStr.substring(
    4,
    6
  )}-${dateStr.substring(6)}`;

  let date = new Date(dateStr);

  return (
    days[date.getUTCDay()] +
    ", " +
    months[date.getUTCMonth()] +
    ". " +
    date.getUTCDate()
  );
}

class Event extends React.Component {
  static defaultProps = {
    title: "ERROR",
    link: "",
    image: "",
    date: "",
    time: "",
    location: ""
  };

  render() {
    return (
      <Col sm={6} style={{ marginBottom: spacer2 }}>
        <a href={this.props.link} target="_blank">
          <img
            style={{ marginBottom: spacer1 }}
            src={this.props.image}
            alt=""
          ></img>
        </a>
        <h3 style={{ marginBottom: spacer1 }}>{this.props.title}</h3>
        <p className="text_small">
          {formatDate(this.props.date)}
          <br></br>
          {this.props.location}
          <br></br>
          {formatTime(this.props.time)}
        </p>
      </Col>
    );
  }
}

export default Event;
