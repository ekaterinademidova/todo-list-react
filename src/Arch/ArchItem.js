import React from 'react';

export default function TodoItem({item, showModal, setShowModal, modal, setModal, perform, setPerform}) {
  const restoreModal = {
    title: 'Restore a list item', 
    width: '400px',
    content: 'You are about to restore a list item.',
    footerButtons: [
        {text: 'Cancel', type: 'secondary'},
        {text: 'Restore', type: 'danger'}
    ]
  };

  const restore = () => {
    showModal = true;
    setShowModal(showModal);
    modal = restoreModal;
    setModal(modal);
    perform = {
      action: 'restore',
      id: item.id
    };
    setPerform(perform);
  };

  return (
    <div className="list__item arch">
        <i className="far fa-minus-square"></i>
        <input type="text" className="list__item-text" value={item.title} readOnly />
        <i className="fas fa-undo-alt" onClick={restore}></i>
    </div>
  );
};