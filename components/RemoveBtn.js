'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function RemoveBtn({ id }) {

  const router = useRouter()

  const removeItem = async () => {
    const confirmed = confirm(`Are you sure?`)

    if (confirmed) {
      const res = await fetch(`http://127.0.0.1:3000/api/items?id=${id}`, {
        method: 'DELETE',
      })

      if (res.ok) {
        router.refresh()
      }
    }
  }

  return (
    <div>
      <button onClick={removeItem} className='text-red-600'>Delete</button>
    </div>
  )
}
