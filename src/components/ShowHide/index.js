// Write your code here

import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading-1">Show/Hide</h1>
          <div className="btn-container">
            <div>
              <button className="btn-style-1" onClick={this.onFirstName}>
                Show/Hide Firstname
              </button>
              {firstName ? <p className="show-paragraph-1">Joe</p> : null}
            </div>
            <div>
              <button className="btn-style-2" onClick={this.onLastName}>
                Show/Hide Lastname
              </button>
              {lastName ? <p className="show-paragraph-2">Jonas</p> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
