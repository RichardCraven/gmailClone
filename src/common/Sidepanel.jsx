import React from 'react';
import './Sidepanel.scss'

const Sidepanel = (props) => {
    const mapper = {
        "Inbox": 'inbox',
        "Trash": 'trash',
        "Work Emails": 'work-emails',
        "Mailing Lists": 'mailing-lists',
        "Sent": 'sent',
        "Spam": 'spam',
        "Drafts": 'drafts',
        "Personal": 'personal',
    }
    return (
      <div className="Sidepanel">
        <button className="compose-button" onClick={props.composeClicked}>
            Compose
        </button>
        <div className="folders-container">
            {props.folders ? props.folders.map((e, i) => {
                return <div key={i} className={`side-panel-line-item ${props.currentView && (props.currentView === mapper[e] || props.currentView === `${mapper[e]}-messages`) ? 'selected' : ''}`} onClick={() => props.navTo(mapper[e])}>
                            {e}
                        </div> 
            }) : <div>No Folders</div>}
        </div>
      </div>
    );
  }
  
  export default Sidepanel;
  