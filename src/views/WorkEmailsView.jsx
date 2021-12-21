import React from 'react';
import './WorkEmailsView.scss'

const WorkEmailsView = ({workEmailsData, toggleCheckboxChange, messageClicked}) => {

    return (
      <div className="WorkEmailsView view">
        <div className="header">
          WORK EMAILS
        </div>
        <div className="line-items-container">
          {workEmailsData.length > 0 ? workEmailsData.map((e, i) => {
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
  
  export default WorkEmailsView;
  