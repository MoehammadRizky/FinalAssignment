import { NextResponse } from "next/server"

export async function POST(req) {
    const formData = await req.formData()

    const userName = formData.get("userName")
    const gmail = formData.get("gmail")
    const password = formData.get("password")


    console.log({
        userName,
        gmail,
        password
    });

    return NextResponse.json({})
}
