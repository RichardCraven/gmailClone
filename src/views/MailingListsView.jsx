import React from 'react';
import './MailingListsView.scss'

const MailingListsView = ({mailingListsData, toggleCheckboxChange, messageClicked}) => {

    return (
      <div className="MailingListsView view">
        <div className="header">
          MAILING LISTS
        </div>
        <div className="line-items-container">
          {mailingListsData.length > 0 ? mailingListsData.map((e, i) => {
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
  
  export default MailingListsView;
  