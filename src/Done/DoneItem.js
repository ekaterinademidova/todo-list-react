import React, {useContext} from 'react';
import {Context} from '../context';

export default function DoneItem({item}) {
  const {dispatch} = useContext(Context);

  const undone = () => {
    dispatch({
    type: 'undone',
    payload: item.id
    });
  };

  return (
    <div className="list__item done">
        <i className="far fa-check-square" onClick={undone}></i>
        <input type="text" className="list__item-text" value={item.title} readOnly />
    </div>
  );
};