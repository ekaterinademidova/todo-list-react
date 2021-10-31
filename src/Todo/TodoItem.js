import React, {useState, useContext}  from 'react';
import {Context} from '../context';

export default function TodoItem({item, showModal, setShowModal, modal, setModal, perform, setPerform}) {
  const {dispatch} = useContext(Context);

  const removeModal = {
    title: 'Removing a list item', 
    width: '400px',
    content: 'You are about to remove a list item. It will be possible to restore it from the list of archived items.',
    footerButtons: [
        {text: 'Cancel', type: 'secondary'},
        {text: 'Delete', type: 'danger'}
    ]
  };

  const remove = () => {
    showModal = true;
    setShowModal(showModal);
    modal = removeModal;
    setModal(modal);
    perform = {
      action: 'remove',
      id: item.id
    };
    setPerform(perform);
  };

  const done = () => {
    dispatch({
      type: 'done',
      payload: item.id
    });
  };

  let [text, setText] = useState('');
  let [title, setTitle] = useState(item.title);
  let [statusEditingItem, setStatusEditingItem]  = useState(false);
  const textItem = React.useRef(null);

  const edit = () => {
    text = title;
    setText(text);
    textItem.current.focus();
    statusEditingItem = true;
    setStatusEditingItem(statusEditingItem);
  };

  const cancel = () => {
    title = text;
    setTitle(title);
    statusEditingItem = false;
    setStatusEditingItem(statusEditingItem);
  };

  const save = () => {
    dispatch({
      type: 'save',
      payload: item.id,
      title: title
    });
    statusEditingItem = false;
    setStatusEditingItem(statusEditingItem);
  };

  return (
    <div className={statusEditingItem ? "list__item todo edit" : "list__item todo"}>
      <i className="far fa-square" onClick={done} />
      <input type="text" 
        className="list__item-text" 
        value={title} 
        onChange = {event => setTitle(event.target.value)}
        ref = {textItem}
        readOnly  = {!statusEditingItem}
      />
      { !statusEditingItem ? (
        <div className="container-icons">
          <i className="fas fa-edit" onClick={edit}></i>
          <i className="fas fa-trash" onClick={remove}></i>
        </div>
      ) : (
        <div className="container-icons">
          <i className="fas fa-times" onClick={cancel}></i>
          <i className="fas fa-save" onClick={save}></i>
        </div>
      )}
    </div>
  );
};