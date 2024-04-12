import React, {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackGiven = false,
  }
  onClickEmoji = () => this.setState({isFeedbackGiven: true})

  renderFeedbackPage = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
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
    )
  }
  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div>
        <img src= {loveEmojiUrl} alt="love emoji"/>
        <h1>Thank You</h1>
        <p>We will use your feedback to improve our customer support performance</p>
      </div>
    )
  }

  render() {
    const {isFeedbackGiven} = this.state 
    return (
      <div className="app-container">
        <div>
          {isFeedbackGiven
            ? this.renderThankYouScreen()
            : this.renderFeedbackPage()}
        </div>
      </div>
    )
  }
}

export default Feedback
