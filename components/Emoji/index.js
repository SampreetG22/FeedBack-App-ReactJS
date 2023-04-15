import './index.css'

const Emoji = props => {
  const {eachItemDetails, emojiClicked} = props
  const {name, imageUrl} = eachItemDetails
  const BtnClick = () => {
    const count = 1
    emojiClicked(count)
  }
  return (
    <li className="individualEmojiContainer">
      <button onClick={BtnClick} type="button" className="emojiBtn">
        <img src={imageUrl} alt={name} className="imageAlter" />
      </button>
      <p className="paraCSS">{name}</p>
    </li>
  )
}

export default Emoji
