import React from 'react'

export default function Card({item, onOpen}) {
  return (
    <div
 className='bg-olive-50 border-2  border-blue-50  mb-2 max-w-sm mx-auto
    p-4 rounded-2xl mt-2 shadow-md hover:shadow-lg transition
    '>
        <h3 className='font-bold
        '>{item.title}</h3>
        <p className='text-red-500'>{item.status}</p>
        <p className='font-mono'>{item.priority}</p>
        <button
        className='mt-3 text-sm bg-black text-white px-3 py-1
        rounded-lg' onClick={()=>onOpen(item)}>Details</button>
    </div>
  );
}
