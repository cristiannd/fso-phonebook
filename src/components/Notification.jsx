const Notification = ({ message }) => {
  if (message === null) return null

  return <div className="message-successful">{message}</div>
}

export default Notification
