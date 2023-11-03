import connectMongoDB from '../../lib/db'
import Topic from "../../../models/topic"
import { NextResponse } from "next/server"

export async function POST(req){
    const {title,description}=await req.json()
    await connectMongoDB()
    await Topic.create({title,description})

    return NextResponse.json({message:"Topic crated"},{status:201})
}

export async function GET(req){

    await connectMongoDB()
    const topics = await Topic.find();
    return NextResponse.json({topics})
}

export async function DELETE(req){
    const id = req.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:'deleted'},{status:200})
}