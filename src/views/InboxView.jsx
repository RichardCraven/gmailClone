import React from 'react';
import './InboxView.scss'

const InboxView = ({inboxData, toggleCheckboxChange, messageClicked}) => {

    return (
      <div className="InboxView view">
        <div className="header">
          INBOX
        </div>
        <div className="line-items-container">
          {inboxData.length > 0 ? inboxData.map((e, i) => {
              return <div className="line-item" key={i} onClick={()=> messageClicked(e)}>
                          <div className="checkbox">
                            <input
                              type="checkbox"
                              value={e.checked}
                              defaultChecked={e.checked} 
                              onClick={(event) => event.stopPropagation()}
                              onChange={() => toggleCheckboxChange(e, i)}
                            />
                          </div>
                          From: {e.from} Subject: {e.subject}
                      </div> 
          }) : <div className="no-messages">No Messages</div>}
        </div>
      </div>
    );
  }
  
  export default InboxView;
  