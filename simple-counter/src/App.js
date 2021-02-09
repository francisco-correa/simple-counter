import './css/App.css';
import ReactDOM from 'react-dom';
import propTypes from "prop-types"
import "@fortawesome/fontawesome-svg-core"
import "@fortawesome/free-solid-svg-icons"
import "@fortawesome/react-fontawesome"
import "bootstrap/dist/css/bootstrap.css";


function Counter(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
        <div className="simpleCounter">
          <i className="fa fa-clock-o"></i>
        </div>
        </div>
          <div className="col-md-3">
          <div className="hours">{props.digitThree}</div>
        </div>
          <div className="col-md-3">
          <div className="minutes">{props.digitTwo}</div>
        </div>
          <div className="col-md-3">
          <div className="seconds">{props.digitOne}</div>
        </div>
      </div>
    </div>  
  );
}

Counter.propTypes = {
  digitThree: propTypes.number,
  digitTwo: propTypes.number,
  digitOne: propTypes.number,
}

let counter = 0
setInterval(function() {
  const three = Math.floor(counter/3600)
  const two = Math.floor(counter/60)
  const one = Math.floor(counter/1)
  console.log(three, two, one)
  counter++
ReactDOM.render (
     <Counter digitOne={one} digitTwo={two} digitThree={three} />, document.getElementById("root")
)
},1000)

export default Counter;


