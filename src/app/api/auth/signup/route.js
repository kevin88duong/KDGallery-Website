import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async(request)=>{
    const {name,email,password} = await request.json();

    await connect()
    
    const hashPassword = await bcrypt.hash(password, 8)
    const newUser = new User({
        name,
        email,
        password: hashPassword,
    })

    try {
        await newUser.save()
        return new NextResponse("User Created",{
            status:201
        })
    } catch (err) {
        return new NextResponse(err.message,{
            status:500
        })
    }
}