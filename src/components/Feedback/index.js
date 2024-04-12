import React, {Component} from 'react'
import './index.css'

class Feedback extends Component {
  render() {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="app-container">
        <div className="feedback-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emoji-container">
            {emojis.map(eachEmoji => (
              <li className="emoji" key={eachEmoji.id}>
                <img
                  className="emoji-img"
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  onClick={this.onClickEmoji}
                />
                <p className="emoji-name">{eachEmoji.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback
