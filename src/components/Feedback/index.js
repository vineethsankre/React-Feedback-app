import React, {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackGiven: false,
  }
  onClickEmoji = () => this.setState({isFeedbackGiven: true})

  renderFeedbackPage = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="feedback-question-container">
        <h1 className="feedback-question">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list">
          {emojis.map(eachEmoji => (
            <li className="emoji" key={eachEmoji.id}>
              <button type="button" className="emoji-btn" onClick={this.onClickEmoji}>
                <img
                  className="emoji-img"
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                />
              </button>
              
              <p className="emoji-name">{eachEmoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thank-you-container">
        <img className="love-emoji" src={loveEmojiUrl} alt="love emoji" />
        <h1 className="thank-you-text">Thank You</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackGiven} = this.state
    return (
      <div className="app-container">
        <div className="feedback-card">
          {isFeedbackGiven
            ? this.renderThankYouScreen()
            : this.renderFeedbackPage()}
        </div>
      </div>
    )
  }
}

export default Feedback
