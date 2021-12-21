import React from 'react';
import './MessageView.scss'

const MessageView = (props) => {
    return (
      <div className="MessageView">
        <div className="header">
            <button className="back-button" onClick={() => props.navTo(props.parent)}> {`<`} </button>
          {props.data.subject}
        </div>
        <div className="message-content">
            {props.data.body}
        </div>
      </div>
    );
  }
  
  export default MessageView;
  