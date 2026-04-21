import React from 'react'

export default function Modal({isModalOpen,selectedItem,setModalOpen,onStatusChange}) {


  return (

    <div>
  {isModalOpen && selectedItem && (
  <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center">
    <div className="bg-white p-5 rounded-xl w-80">
      <h2 className="font-bold">{selectedItem.title}</h2>
      <p>{selectedItem.summary}</p>

      <div className="flex gap-2 mt-3">

  <button
    className="bg-green-500 text-white px-3 py-1 rounded"
    onClick={() => {
      onStatusChange(selectedItem.id, "reviewed")
      setModalOpen(false)
    }}
  >
    Mark Reviewed
  </button>

  <button
    className="bg-yellow-500 text-white px-3 py-1 rounded"
    onClick={() => {
      onStatusChange(selectedItem.id, "snoozed")
      setModalOpen(false)
    }}
  >
   Snooze
  </button>

</div>

      <button
        className="mt-3 bg-red-500 text-white px-3 py-1 rounded"
        onClick={() => setModalOpen(false)}
      >
        Close
      </button>
    </div>
  </div>
)}

    </div>
  )
}

