import Link from "next/link";
import React from "react";


const page = () => {
    return (
        <div className="h-16 px-5 text-white bg-red-500 flex items-center justify-between">
            <Link href="/">  <h2>Logo</h2></Link>
            <div className="flex gap-8"> 
                <Link href="/About">About</Link>
                <Link href={"/Gallery"}>Gallery</Link>
                <Link href="/Product">Product</Link>
                <Link href="/Contact">Contact</Link>
            </div>
        </div>
    )
}

export default page