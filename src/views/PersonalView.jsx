import React from 'react';
import './PersonalView.scss'

const PersonalView = ({personalData, toggleCheckboxChange, messageClicked}) => {

    return (
      <div className="PersonalView view">
        <div className="header">
          PERSONAL
        </div>
        <div className="line-items-container">
          {personalData.length > 0 ? personalData.map((e, i) => {
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
  
  export default PersonalView;
  