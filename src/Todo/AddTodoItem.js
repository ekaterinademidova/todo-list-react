import React, {useState, useContext} from 'react';
import {Context} from '../context';

export default function AddTodoItem({statusTabs}) {
  const {dispatch} = useContext(Context);
  let [todoTitle, setTodoTitle] = useState('');
  const todoTitleRef = React.useRef(null);

  const clickEnter = event => {
    if(event.key === "Enter") {
      addTodo();
    }
  };

  const addTodo = () => {
    const title = todoTitle.trim();
    if (title) {
        if (!statusTabs) {
          localStorage.setItem('statusTabs', true); 
        }
        dispatch({
          type: 'add', 
          payload: title
        });
    }
    todoTitleRef.current.focus();
    setTodoTitle('');
  };

  return (
    <div className="list__item add">
      <i className="fas fa-plus"></i>
      <input type="text" 
          className="list__item-text" 
          value={todoTitle}
          onChange={event => setTodoTitle(event.target.value)}
          onKeyPress={clickEnter}
          ref={todoTitleRef}
          placeholder="List item" 
          autoFocus 
      />
      <i className="fas fa-angle-double-right" onClick={addTodo} />
    </div>
  );
};