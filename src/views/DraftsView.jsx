import React from 'react';
import './DraftsView.scss'

const DraftsView = ({draftsData, toggleCheckboxChange, messageClicked}) => {

    return (
      <div className="DraftsView view">
        <div className="header">
          DRAFTS
        </div>
        <div className="line-items-container">
          {draftsData.length > 0 ? draftsData.map((e, i) => {
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
  
  export default DraftsView;
  