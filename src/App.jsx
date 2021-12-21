import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import './styles/common.scss';
import InboxView from './views/InboxView'
import TrashView from './views/TrashView'
import SentView from './views/SentView'
import SpamView from './views/SpamView'
import MailingListsView from './views/MailingListsView'
import WorkEmailsView from './views/WorkEmailsView'
import MessageView from './views/MessageView'
import DraftsView from './views/DraftsView'
import PersonalView from './views/PersonalView'

import ComposePanel from './common/ComposePanel'

// import contacts from '../public/data/contacts'

import Toolbar from './common/Toolbar';
import Sidepanel from './common/Sidepanel';

const App = () => {
  const [inboxData, setInboxData] = useState([])
  const [sentData, setSentData] = useState([])
  const [spamData, setSpamData] = useState([])
  const [trashData, setTrashData] = useState([])
  const [workEmailsData, setWorkEmailsData] = useState([])
  const [mailingListsData, setMailingListsData] = useState([])
  const [draftsData, setDraftsData] = useState([])
  const [personalData, setPersonalData] = useState([])

  const [contactsData, setContactsData] = useState([])
  const [filtersData, setFiltersData] = useState([])

  const [foldersData, setFoldersData] = useState([])
  const [inboxMessages, setInboxMessages] = useState([])
  const [activeMessage, setActiveMessage] = useState()
  const [currentView, setCurrentView] = useState('inbox')

  const [showComposePanel, setShowComposePanel] = useState(false)

  useEffect(() => {
    getInboxData()
    getMessagesData()
    getTrashData()
    getContactsData()
    getFoldersData()
    getFiltersData()
  }, ['']);

  const getInboxData = () => {
    fetch('./data/folders/inbox.js')
    .then((response) => response.json())
    .then((data)=> {
      setInboxData(data)
    })
  }
  const getMessagesData = () => {
    fetch('./data/messages/messages.js')
    .then((response) => response.json())
    .then((data)=> {
      setInboxMessages(data)
    })
  }
  const getTrashData = () => {
    fetch('./data/folders/trash.js')
    .then((response) => response.json())
    .then((data)=> {
      setTrashData(data)
    })
  }
  const getContactsData = () => {
    fetch('./data/contacts.js')
    .then((response) => response.json())
    .then((data)=> {
      setContactsData(data)
    })
  }
  const getFoldersData = () => {
    fetch('./data/folders.js')
    .then((response) => response.json())
    .then((data)=> {
      setFoldersData(data)
    })
  }
  const getFiltersData = () => {
    fetch('./data/filters.js')
    .then((response) => response.json())
    .then((data)=> {
      setFiltersData(data)
    })
  }

  const messageClicked = (e) => {
    const message = inboxMessages.find(m=>m['id'] === e['message-id'])
    setActiveMessage(message)
    setCurrentView(`${currentView}-messages`)
  }

  const toggleCheckboxChange = (e, i) => {
    const updatedCheckedState = [...inboxMessages].map((item, index) => {
      if(item === e) item.checked = !item.checked;
      return item
    });
    setInboxMessages(updatedCheckedState)
  }

  const navTo = (destination) => {
    setCurrentView(destination)
  }

  const composeClicked = () => {
    setShowComposePanel(true)
  }

  const closePanel = () => {
    setShowComposePanel(false)
  }

  return (
    <div className="App">
      <Toolbar/>
      <div className="main-content-container">
        <Sidepanel folders={foldersData} navTo={navTo} currentView={currentView} composeClicked={composeClicked}/>
        {currentView === 'inbox' &&  <InboxView  inboxData={inboxData} toggleCheckboxChange={toggleCheckboxChange} messageClicked={messageClicked}/>}
        {currentView === 'inbox-messages' && <MessageView data={activeMessage} navTo={navTo} parent={'inbox'}/>}

        {currentView === 'trash' &&  <TrashView  trashData={trashData} toggleCheckboxChange={toggleCheckboxChange} messageClicked={messageClicked}/>}
        {currentView === 'trash-messages' && <MessageView data={activeMessage} navTo={navTo} parent={'trash'}/>}

        {currentView === 'sent' &&  <SentView  sentData={sentData} toggleCheckboxChange={toggleCheckboxChange} messageClicked={messageClicked}/>}
        {currentView === 'sent-messages' && <MessageView data={activeMessage} navTo={navTo} parent={'sent'}/>}

        {currentView === 'spam' &&  <SpamView  spamData={spamData} toggleCheckboxChange={toggleCheckboxChange} messageClicked={messageClicked}/>}
        {currentView === 'spam-messages' && <MessageView data={activeMessage} navTo={navTo} parent={'spam'}/>}

        {currentView === 'work-emails' &&  <WorkEmailsView  workEmailsData={workEmailsData} toggleCheckboxChange={toggleCheckboxChange} messageClicked={messageClicked}/>}
        {currentView === 'work-emails-messages' && <MessageView data={activeMessage} navTo={navTo} parent={'work-emails'}/>}

        {currentView === 'mailing-lists' &&  <MailingListsView  mailingListsData={mailingListsData} toggleCheckboxChange={toggleCheckboxChange} messageClicked={messageClicked}/>}
        {currentView === 'mailingLists-messages' && <MessageView data={activeMessage} navTo={navTo} parent={'mailing-lists'}/>}

        {currentView === 'drafts' &&  <DraftsView  draftsData={draftsData} toggleCheckboxChange={toggleCheckboxChange} messageClicked={messageClicked}/>}
        {currentView === 'drafts-messages' && <MessageView data={activeMessage} navTo={navTo} parent={'drafts'}/>}

        {currentView === 'personal' &&  <PersonalView  personalData={personalData} toggleCheckboxChange={toggleCheckboxChange} messageClicked={messageClicked}/>}
        {currentView === 'personal-messages' && <MessageView data={activeMessage} navTo={navTo} parent={'personal'}/>}

        {showComposePanel && <ComposePanel closePanel={closePanel}/>}
        
      </div>
    </div>
  );
}

export default App;
