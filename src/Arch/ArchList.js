import React from 'react'
import ArchItem from './ArchItem'

export default function ArchList({items, showModal, setShowModal, modal, setModal, perform, setPerform}) {
  return (
    items ? items.map(item => <ArchItem key={item.id} 
                                        item={item} 
                                        showModal={showModal} setShowModal={setShowModal} 
                                        modal={modal} setModal={setModal} 
                                        perform={perform} setPerform={setPerform}/>
                      ) : <div />
  );
};