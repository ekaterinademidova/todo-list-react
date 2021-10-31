import React, {useContext} from 'react';
import {Context} from './context';

export default function Modal({modal, perform, showModal, setShowModal}) {
  const {dispatch} = useContext(Context);

  const cancel = () => {
    showModal = false;
    setShowModal(showModal);
  };

  const action = (perform) => {
    if (perform.action === 'remove') {
      dispatch({
        type: 'remove',
        payload: perform.id
      });
    } else {
      dispatch({
        type: 'restore',
        payload: perform.id
      });
    }
    cancel();
  }

  return (
    <div className="modal-overlay">
      <div className="modal-window">
        <div className="modal-header">
          <span className="modal-title">{modal.title || 'Окно'}</span>
        </div>
        <div className="modal-body">
          {modal.content || ''}
        </div>
        <div className="modal-footer">
          <button className={"btn btn-"+ modal.footerButtons[0].type} 
            style={{marginRight: 5 + "px"}} 
            onClick={cancel}
          >
            {modal.footerButtons[0].text}
          </button>
          <button className={"btn btn-"+ modal.footerButtons[1].type} 
            onClick={() => action(perform)}
          >
            {modal.footerButtons[1].text}
          </button>
        </div>
      </div>
    </div>
  );
};