import connectMongoDB from "@/libs/mongodb"
import Item from "@/models/item"
import { NextResponse } from "next/server"

export async function PUT(req, { params }) {
    const { id } = params
    const { newTitle: title, newDescription: description } = await req.json()
    await connectMongoDB()
    await Item.findByIdAndUpdate(id, { title, description })
    return NextResponse.json({ message: 'item has updated.' }, { status: 200 })
}

export async function GET(req, { params }) {
    const { id } = params
    await connectMongoDB()
    const item = await Item.findOne({ _id: id })
    return NextResponse.json({ item }, { status: 200 })
}