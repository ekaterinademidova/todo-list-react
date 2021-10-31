import React from 'react';

export default function Tabs({selectedTab, setSelectedTab}) {
  const showActuals = () => {
    selectedTab = 'actuals';
    setSelectedTab(selectedTab);
    localStorage.setItem('selectedTab', selectedTab);
  };

  const showArchived = () => {
    selectedTab = 'archived';
    setSelectedTab(selectedTab);
    localStorage.setItem('selectedTab', selectedTab);
  };

  return (
    <ul className="list__nav-tabs" >
      <li className={selectedTab === 'actuals' ? "list__nav-item active" : "list__nav-item"} onClick={showActuals}>
        <a href="!#">Actuals</a>
      </li>
      <li className={selectedTab === 'archived' ? "list__nav-item active" : "list__nav-item"} onClick={showArchived}>
        <a href="!#">Archived</a>
      </li>
    </ul>   
  );
};