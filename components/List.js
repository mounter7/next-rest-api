'use client'

import Link from "next/link";
import RemoveBtn from "./RemoveBtn";

const getItems = async () => {
  try {
    const res = await fetch('http://127.0.0.1:3000/api/items', {
      cache: 'no-store',
    })

    if (!res.ok) {
      throw new Error('Failed to fetch items.')
    }

    return res.json()

  } catch (error) {
    console.log('Error loading items.', error)
  }
}

export default async function List() {

  const { items } = await getItems()

  return (
    <>
    {items.map((item) => (
    <div className="p-4 bg-white rounded-lg border border-gray-300 max-w-[600px] mx-auto my-4">
      <div className="item">
        <h2 className="font-bold text-2xl">{item.title}</h2>
        <p className="mb-4 text-slate-600">{item.description}</p>
      </div>
      <div className="item flex gap-2">
        <Link href={`/edit/${item._id}`} className="text-blue-600">Edit</Link>
        <RemoveBtn id={item._id} />
      </div>
    </div>
    ))}
    </>
  )
}
