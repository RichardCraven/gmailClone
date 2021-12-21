import React, { useRef, useEffect } from 'react';
import './ComposePanel.scss'

function useOutsideAlerter(ref, closePanel) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                closePanel()
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

const ComposePanel = ({closePanel}) => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, closePanel);

    return (
        <div ref={wrapperRef}>
            <div className="ComposePanel">
                <div className="headline">New Message</div>
                <div className="recipients-container">
                    <input type="text" placeholder="To:"  />
                </div>
                <div className="subject-container">
                    <input type="text" placeholder="Subject:"  />
                </div>
                <div className="main-text-container">
                    <textarea name="compose-content" id="compose-content" cols="30" rows="10"></textarea>
                </div>
            </div>
        </div>
      
    );
  }
  
  export default ComposePanel;
  