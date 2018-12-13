import React from 'react'
import ReactDOM from 'react-dom'

import { connect,Provider } from "react-redux";
import { createStore } from "redux";

class App extends React.Component {
  render() {
    return (
      <div>
          <h1>Hello, {this.props.name}</h1>
          <button shubham="test" onClick={this.props.increment}>Increment</button>
          <button onClick={this.props.counter > 0 ? this.props.decrement : null }>Decrement</button>
          <button onClick={this.props.reset}>Reset</button>
          <div>{this.props.counter}</div>
      </div>
      );
  }
}

const initialState = {
  name: "Paras",
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': 
      return Object.assign({}, state, {name:"Subhakar", counter: ++state.counter});
      break;
    case 'DECREMENT': 
      return Object.assign({}, state, {name:"Neeraj", counter: --state.counter});
      break;
    case 'RESET': 
      return Object.assign({}, state, initialState);
      break;
    default: 
      return Object.assign({}, state, initialState);
      break;
  }  
};

function mapStateToProps(state) {
  return { 
    name: state.name,
    counter: state.counter
   }
}

const mapDispatchToProps = (dispatch, ownProps) => {
   
  return {
     // dispatching plain actions
     increment: () => {console.log(ownProps); dispatch({ type: "INCREMENT" })},
     decrement: () => dispatch({ type: "DECREMENT" }),
     reset: () => dispatch({ type: "RESET" })
   };
 };


const store = createStore(reducer);

const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
);

const ConnectedComponent = connectToStore(App);


const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <ConnectedComponent shubham="test1"/>
  </Provider>,
  rootElement
);