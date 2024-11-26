import React, { useEffect, useState } from 'react'
import AccordionItem from './AccordionItem';

const Accordion = () => {
    const [data, setData]  = useState([])
    const [openIndex, setOpenIndex] = useState(0)

    const fetchData = async() => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await resp.json();
        setData(result)
    }

    useEffect(()=>{
        fetchData();
    },[])
  return (
  <div>
    {data.map((item, id)=>{
        return(
            <AccordionItem key={id} title={item.name} body={item?.address?.city}
            isOpen={id === openIndex}
            setIsOpen = {() => {
                id === openIndex? setOpenIndex(null) : setOpenIndex(id)
            }}
            />
        )
          
    }

    )
}
  </div>
  )
}

export default Accordion
