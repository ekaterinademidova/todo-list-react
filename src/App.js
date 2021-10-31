import React, {useState, useEffect, useReducer} from 'react';
import Themes from './Themes';
import ListName from './ListName';
import Tabs from './Tabs';
import TodoList from './Todo/TodoList';
import DoneList from './Done/DoneList';
import ArchList from './Arch/ArchList';
import AddTodoItem from './Todo/AddTodoItem';
import Modal from './Modal';
import reducer from './reducer';
import {Context} from './context';

function App() {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('items')) || []);
  let statusTabs = JSON.parse(localStorage.getItem('statusTabs') || false);
  const [selectedTab, setSelectedTab] = useState(localStorage.getItem('selectedTab') || 'actuals');

  const todos = state.filter((item) => item.completed === false && item.deleted === false);
  const dones = state.filter((item) => item.completed === true);
  const archs = state.filter((item) => item.deleted === true);

  let [showModal, setShowModal] = useState(false);
  let [modal, setModal] = useState(null);
  let [perform, setPerform] = useState(null);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(state));
  }, [state]);
  
  return (
    <Context.Provider value={{
      dispatch
    }}>
      <div className="container">
        <div className="vmodal open">
          {showModal && <Modal modal={modal} perform={perform} showModal={showModal} setShowModal={setShowModal}/>}
        </div>
        <Themes />
        <div className="app">
          <div className="wrap">
            <div className="list">
              <ListName />
              <div className="list__body">
                { statusTabs === true && <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>}
                { selectedTab === 'actuals' ? (
                  <div id="actualsInfo">
                      <TodoList items={todos} 
                        showModal={showModal} setShowModal={setShowModal} 
                        modal={modal} setModal={setModal} 
                        perform={perform} setPerform={setPerform}/>
                      <AddTodoItem statusTabs={statusTabs}/>
                      <DoneList items={dones} />
                  </div>
                ) : (
                  archs.length !== 0 ? (
                    <ArchList items={archs} 
                      showModal={showModal} setShowModal={setShowModal} 
                      modal={modal} setModal={setModal} 
                      perform={perform} setPerform={setPerform}/>
                  ) : (
                    <div>
                      The list is currently empty.
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
};

export default App;
