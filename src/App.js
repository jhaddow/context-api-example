import React, { Component } from 'react';
import './App.css';

const NumberContext = React.createContext();

const Green = () => (
    <div className="green">
        <NumberContext.Consumer>
          {context => context.number}
        </NumberContext.Consumer>
    </div>
);

const Blue = () => (
  <div className="blue">
    <NumberContext.Consumer>
      {context => <button onClick={context.increment}> increment </button>}
    </NumberContext.Consumer>
    <Green />
  </div>
);

class NumberProvider extends Component {
  state = {
    number: 10,
    increment: () => {
      this.setState({number: this.state.number + 1})
    }
  }

  render() {
    return (
      <NumberContext.Provider value={this.state}>
        {this.props.children}
      </NumberContext.Provider>
    )
  }
}

class Red extends Component {

  render() {
    return (
      <NumberProvider>
        <div className="red">
          <NumberContext.Consumer>
            { context => context.number}
          </NumberContext.Consumer>
          <Blue />
        </div>
      </NumberProvider>
    );
  }
}

export default Red;
