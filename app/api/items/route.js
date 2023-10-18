import connectMongoDB from "@/libs/mongodb"
import Item from "@/models/item"
import { NextResponse } from "next/server"

export async function POST(req) {
    const { title, description } = await req.json()
    await connectMongoDB()
    await Item.create({ title, description })
    return NextResponse.json({message: 'Item has created.'}, { status: 201 })
}

export async function GET() {
    await connectMongoDB()
    const items = await Item.find()
    return NextResponse.json({ items })
}

export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get('id')
    await connectMongoDB()
    await Item.findByIdAndDelete(id)
    return NextResponse.json({ message: 'Item has deleted.' }, { status: 200 })
}