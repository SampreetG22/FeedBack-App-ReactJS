import {Component} from 'react'
import './index.css'
import Emoji from '../Emoji'

class Feedback extends Component {
  state = {count: 0}

  emojiClicked = C => {
    this.setState({count: C})
  }

  render() {
    const {resources} = this.props
    const emojisList = resources.emojis
    const {count} = this.state
    const loveImage = resources.loveEmojiUrl
    if (count === 0) {
      return (
        <div className="mainContainer">
          <div className="cardContainer">
            <h1 className="mainHead">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emojisContainer">
              {emojisList.map(eachItem => (
                <Emoji
                  key={eachItem.id}
                  emojiClicked={this.emojiClicked}
                  eachItemDetails={eachItem}
                />
              ))}
            </ul>
          </div>
        </div>
      )
    }
    return (
      <div className="mainContainer">
        <div className="cardContainer">
          <img src={loveImage} alt="love emoji" className="loveEmoji" />
          <h1 className="thanksCSS">Thank You!</h1>
          <p className="thanksTextCSS">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      </div>
    )
  }
}

export default Feedback
