import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({items, showModal, setShowModal, modal, setModal, perform, setPerform}) {
  return (
    items ? items.map(item => <TodoItem key={item.id} 
                                        item={item} 
                                        showModal={showModal} setShowModal={setShowModal} 
                                        modal={modal} setModal={setModal} 
                                        perform={perform} setPerform={setPerform}/>
                      ) : <div />
  )
}