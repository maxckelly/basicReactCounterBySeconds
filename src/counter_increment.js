import React from 'react';
import axios from 'axios'

// The below sets a delay of 1000 (1 second)
const DELAY = 1000;

class Counter extends React.Component {

  

  // This sets the count as 0
  state = { count: 0, data: '' };

  // Then runs the count and increases the state by 1, then it is delayed 1000
  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 })
      // The axios is collecting information from the API 
      if (this.state.count % 10 === 0) {
        axios.get(`http://numbersapi.com/${this.state.count}/trivia`).then((response) => {
          let data = response.data
          this.setState({ data })
        }).catch(error => {
          console.log(`An error has occured! + ${error}`)
        })
      }
    }, DELAY);
    // clearInterval(intervalId)
  };

  reset = () => {
    this.setState({count: 0})
    this.setState({data: ''})
  } 

  render() {
    return (
      <div>
        <p> Current Count: {this.state.count} </p>
        <p> {this.state.data}  </p>
        <button onClick={this.reset} > Reset </button>
      </div>
    )
  }
}

export default Counter;