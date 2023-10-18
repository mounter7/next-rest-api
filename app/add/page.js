"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Img from "../../public/next.svg";

const metadata = {
  title: "Add",
  description: "Generated by create next app",
};

export default function Add() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and Description fields are required.");
      return;
    }

    try {
      const res = await fetch(`/api/items`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create the item.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[600px] mx-auto">
      <form
        onSubmit={handleSubmit}
        action=""
        className="bg-white p-4 my-4 border border-gray-300 rounded-lg flex flex-col"
      >
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Title"
          className="border p-2 m-1 border-gray-400 rounded-lg"
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          name=""
          placeholder="Description"
          className="border p-2 m-1 border-gray-400 rounded-lg"
        ></textarea>
        <button type="submit" className="m-1 bg-black text-white p-2 rounded">
          Add
        </button>
        <div className="flex flex-col items-center justify-center">
          <Image
            className="p-4"
            src={Img}
            width={400}
            height={50}
            alt="Image"
          />
        </div>
      </form>
    </div>
  );
}