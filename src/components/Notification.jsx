const Notification = ({ message }) => {
  if (message === null) return null

  return <div className={message.class}>{message.text}</div>
}

export default Notification
