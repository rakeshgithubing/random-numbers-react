// Write your code here

import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(() => {
      const mathRandom = Math.random() * 100
      const mathCeil = Math.ceil(mathRandom)
      const number = mathCeil
      return {count: number}
    })
  }

  render() {
    const {count} = this.state

    const evenOddCheck = () => {
      if (count % 2 === 0) {
        return true
      }
      return false
    }

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Count {count}</h1>
          <p className="even-odd-paragraph">
            Count is {evenOddCheck() ? 'Even' : 'Odd'}
          </p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="paragraph">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
