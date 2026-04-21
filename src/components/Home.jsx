import React, { useState } from 'react'
import List from './List'
import Modal from './Modal'

export default function Home() {


const [statusFilter,setStatusFilter]=useState("all")
const [loading,setLoading]=useState(false)
const[isModalOpen,setModalOpen]=useState(false)
const [search,setSearch]=useState("")
const [sort,setSort]=useState("latest")
const [selectedItem,setSelectedItem]=useState(null)

const item=[
{
id:1,
title:"Login button not working",
summary:"Users unable to click login button on homepage",
status:"pending",
priority:"high",
tags:["bug","frontend"],
createdAt:"2026-04-19"
},
{
id:2,
title:"Submit button not working",
summary:"Users unable to submit",
status:"snoozed",
priority:"high",
tags:["bug","frontend"],
createdAt:"2026-04-16"
},
{
id:3,
title:"Delete button not working",
summary:"Users unable to click delete button",
status:"reviewed",
priority:"medium",
tags:["bug","frontend"],
createdAt:"2026-04-15"
},
{
id:4,
title:"Edit button not working",
summary:"Users unable to click Edit button on homepage",
status:"snoozed",
priority:"low",
tags:["bug","frontend"],
createdAt:"2026-04-19"
},
{
id:5,
title:"image not loading",
summary:"Image failed to load in background",
status:"pending",
priority:"medium",
tags:["bug","frontend"],
createdAt:"2026-04-18"
}
]

const extraItems=Array.from({length:20},(_,i)=>{
    const statuses=["pending","reviewed","snoozed"]
    const priorities=["low","medium",'high']

    return {
        id:i+6,
        title:`issue ${i+6}`,
        summary:`This is issue number ${i+6}`,
        status:statuses[i%3],
        priority:priorities[i%3],
        tags:["bug","frontend"],
        createdAt:`2026-04-${17+(i%3)}`

    }})

    const allItems=[...item, ...extraItems]


const[list,setList]=useState(allItems)


const onOpen=(item)=>{
setSelectedItem(item)
setModalOpen(true)
console.log('clicked',selectedItem)
    }

    const handleStatusChange = (id, newStatus) => {
  const updatedList = list.map((item) =>
    item.id === id ? { ...item, status: newStatus } : item
  )

  setList(updatedList)
}

const filteredList = list
  .filter(item => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase())

    const matchesStatus =
      statusFilter === "all" || item.status === statusFilter

    return matchesSearch && matchesStatus
  })
  .sort((a, b) => {
    if (sort === "latest") return new Date(b.createdAt) - new Date(a.createdAt)
    if (sort === "oldest") return new Date(a.createdAt) - new Date(b.createdAt)
    return 0
  })

  return (
    
<div>
  <div className='flex  justify-center align-middle'>
<div className='mb-3 font-stretch-50%'>
<select
  value={statusFilter}
  onChange={(e) => setStatusFilter(e.target.value)}
>
  <option value="all">All</option>
  <option value="pending">Pending</option>
  <option value="reviewed">Reviewed</option>
  <option value="snoozed">Snoozed</option>
</select>
 </div>


<div className='font-stretch-50% mb-3 ml-2'>
<select
  value={sort}
  onChange={(e) => setSort(e.target.value)}>
  <option value="latest">Latest</option>
  <option value="oldest">Oldest</option>
</select>
</div>
</div>


<input className=' content-center border-2 border-amber-950'
  type="text"
  placeholder="Search by title..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}

/>

 <List list={filteredList} onOpen={onOpen}/>
  <Modal setModalOpen={setModalOpen} isModalOpen={isModalOpen} selectedItem={selectedItem}
  onStatusChange={handleStatusChange}/>
 </div>

    
  )

}
