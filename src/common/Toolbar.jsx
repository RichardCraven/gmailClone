import React from 'react';
import './Toolbar.scss'

const Toolbar = (props) => {
    return (
  
      <div className="Toolbar">
        <div className="title-container">
            <div className="title">Gmail</div>
        </div>
        <div className="search-field">
            <input type="text" placeholder="Search"/>
        </div>
      </div>
    );
  }
  
  export default Toolbar;
  