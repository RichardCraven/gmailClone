import React from 'react';
import './TrashView.scss'

const TrashView = ({trashData, toggleCheckboxChange, messageClicked}) => {

    return (
      <div className="TrashView view">
        <div className="header">
          TRASH
        </div>
        <div className="line-items-container">
          {trashData.length > 0 ? trashData.map((e, i) => {
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
  
  export default TrashView;
  