"use client"

import Image from "next/image"
import { useState } from "react"

export default function Page() {
    async function handleSubmitCafe(formData) {
        const res = await fetch("/api/v1/cafes", {
            method: "POST",
            body: formData
        })
        const data = await res.json();
        console.log(data)
    }

    return (
        <form action={handleSubmitCafe}>
            <input name="userName" />
            <input type="email" name="gmail" />
            <input type="password" name="password" />
            <button type="submit"> Submit</button>
        </form>
    )
}