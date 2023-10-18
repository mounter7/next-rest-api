'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function EditItem({ id, title, description }) {

    const router = useRouter()

  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`http://127.0.0.1:3000/api/items/${id}`, {
        method: 'PUT',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription })
      })

      if (!res.ok) {
        throw new Error('Failed to update item.')
      }

      router.push("/")
    } catch (error) {
      console.log(error)
    }
  }


  return (
      <div className="max-w-[600px] mx-auto">
      <form onSubmit={handleSubmit} action="" className="bg-white p-4 my-4 border border-gray-300 rounded-lg flex flex-col">
        <input type="text"
        onChange={e => setNewTitle(e.target.value)} 
        value={newTitle}
        placeholder="Title" className="border p-2 m-1 border-gray-400 rounded-lg"/>
        <textarea name=""
        onChange={e => setNewDescription(e.target.value)}
        value={newDescription}
        placeholder="Description" className="border p-2 m-1 border-gray-400 rounded-lg"></textarea>
        <button className="m-1 bg-black text-white p-2 rounded">Update</button>
      </form>
    </div>
  )
}
