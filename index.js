const Notification = (props) => {
  //  Write your code here.
  const { url, className, text } = props;
  const containerClassName = `notification-container ${className}`;
  return (
    <div className={containerClassName}>
      <img className="icon" src={url} />
      <p className="message">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="main-container">
    <h1 className="heading">Notifications</h1>
    <div className="notifications-items-container">
      <Notification
        url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        className="bg-color-1"
        text="Information Message"
      />
      <Notification
        url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="bg-color-2"
        text="Success Message"
      />
      <Notification
        url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        className="bg-color-3"
        text="Warning Message"
      />
      <Notification
        url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        className="bg-color-4"
        text="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
