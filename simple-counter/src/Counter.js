import React, {useEffect, useState } from "react";
import propTypes from "prop-types";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.css";
import "./css/App.css";

const Counter = () => {
  
  // start counting from "zero"
  const [counting, setCounting] = useState(0);
  
  // adding one second each interval
  useEffect(() => {
      const interval = setInterval(() => {
          setCounting(counting => ++counting)
      }, 1000);
      
      return () => clearInterval(interval);
  }, []);

  const sixth = Math.floor(counting / 1 % 10)
  const fifth = Math.floor(counting / 10 % 10)
  const fourth = Math.floor(counting / 100 % 10)
  const third = Math.floor(counting / 1000 % 10)
  const second = Math.floor(counting / 10000 % 10)
  const first = Math.floor(counting / 100000 % 10)
  console.log(first, second, third, fourth, fifth, sixth, "<--counting in seconds")

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-1">
          <div className="simpleCounter">
            <i className="fa fa-clock-o"></i>
          </div>
        </div>
        <div className="col-md-2">
          <div className="seconds">{first}</div>
        </div>
        <div className="col-md-2">
          <div className="seconds">{second}</div>
        </div>
        <div className="col-md-2">
          <div className="seconds">{third}</div>
        </div>
        <div className="col-md-2">
          <div className="seconds">{fourth}</div>
        </div>
        <div className="col-md-2">
          <div className="seconds">{fifth}</div>
        </div>
        <div className="col-md-1">
          <div className="seconds">{sixth}</div>
        </div>
      </div>
    </div>
  );
};

Counter.propTypes = {
  first: propTypes.number,
  second: propTypes.number,
  third: propTypes.number,
  fourth: propTypes.number,
  fifth: propTypes.number,
  sixth: propTypes.number
};

export default Counter;
