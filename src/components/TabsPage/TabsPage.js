import React from 'react';
import '../TabsPage/TabsPage.css';

import {NavLink} from 'react-router-dom';

const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

const TabsPage = ({ match }) => {
    const currentTab = tabs.find(tab => tab.id === match.params.tabsId) || {content: 'Select Tab Please'}

    return (
      <div>
        <h2>Tabs </h2>
          <ul className="tabs-list">
            {tabs.map(tab => ( 
              <li key={tab.id}><NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink></li>
            ))}
          </ul>
        
        <div className="tabs-container">
          {currentTab.content}
        </div>
      </div>
      )
    }

export default TabsPage;