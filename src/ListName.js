import React, {useState} from 'react';

export default function ListName() {
  let [listName, setListName] = useState(localStorage.getItem('listName') || 'New List');
  let [statusEditingListTitle, setStatusEditingListTitle]  = useState(false);
  let [titleText, setTitleText] = useState('');
  const listNameRef = React.useRef(null);

  const editListTitle = () => {
    titleText = listName;
    setTitleText(titleText);
    listNameRef.current.focus();
    statusEditingListTitle = true;
    setStatusEditingListTitle(statusEditingListTitle);
  };

  const cancelEditListTitle = () => {
    listName = titleText;
    setListName(listName);
    statusEditingListTitle = false;
    setStatusEditingListTitle(statusEditingListTitle);
  };

  const saveEditListTitle = () => {
    statusEditingListTitle = false;
    setStatusEditingListTitle(statusEditingListTitle);
    localStorage.setItem('listName', listName); 
  };

  return (
    <div className="list__header">
      <div className="list__title-wrap">
        <input type="text" 
          className="list__title" 
          value={listName}
          onChange={event => setListName(event.target.value)}
          ref={listNameRef}
          readOnly={!statusEditingListTitle}
        />
        { statusEditingListTitle ? (
          <div className="container-icons">
            <i className="fas fa-times" onClick={cancelEditListTitle}></i>
            <i className="fas fa-save" onClick={saveEditListTitle}></i>
          </div>
        ) : (
          <i className="fas fa-pencil-alt" onClick={editListTitle}></i>
        )}
      </div>
    </div>
  );
};