import React, {useState} from 'react'
import DoneItem from './DoneItem'

export default function DoneList({items}) {
  let [statusDropdown, setStatusDropdown] = useState(JSON.parse(localStorage.getItem('statusDropdown') || true));

  const showDropdown = () => {
    statusDropdown = !statusDropdown;
    setStatusDropdown(statusDropdown);
    localStorage.setItem('statusDropdown', statusDropdown); 
  };

  return (
    <div>
      {items.length !== 0 && 
        <div className="list__dropdown">
          <i className={statusDropdown ? "fas fa-chevron-down" : "fas fa-chevron-right"} onClick={showDropdown}></i>
          <input type="text" className="list__item-text" value={items.length + ' highlighted items'}  readOnly/>
        </div>
      }
      {statusDropdown && items ? items.map(item => <DoneItem key={item.id} item={item} items={items}/>) : <div />}
    </div>
  );
};