import React from 'react';
import './SentView.scss'

const SentView = ({sentData, toggleCheckboxChange, messageClicked}) => {

    return (
      <div className="SentView view">
        <div className="header">
          SENT
        </div>
        <div className="line-items-container">
          {sentData.length > 0 ? sentData.map((e, i) => {
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
  
  export default SentView;
  