import React from 'react';
import './SpamView.scss'

const SpamView = ({spamData, toggleCheckboxChange, messageClicked}) => {
    return (
      <div className="SpamView view">
        <div className="header">
          SPAM
        </div>
        <div className="line-items-container">
          {spamData.length > 0 ? spamData.map((e, i) => {
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
  
  export default SpamView;
  