import React from 'react'

const AccordionItem = ({title, body, isOpen,setIsOpen}) => {
  return (
    
   <div className='acc-body' onClick={() =>{
    setIsOpen(isOpen =>!isOpen)
   }}>
    <div className='acc-title' >{title}
    <button className='acc-btn'>⬇️</button>
    </div>
  
    {isOpen &&  <span className='acc-content'>This is my city {body}, Welcome you all!</span>}
   
   </div>
  
   
   
  )
}

export default AccordionItem
