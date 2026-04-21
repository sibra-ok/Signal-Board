import React from 'react'
import Card from './Card'
export default function List({list ,onOpen}) {
  return (

    <div>
{
    list.map((item)=>(
    <Card key={item.id} item={item} onOpen={onOpen}/>
    
))
}


    </div>
  )
}
