"use client"
import React, { useState } from "react";

const About = () => {
    const [str, SetStr] = useState("Initial")
    return (
        <div className="mx-9">
            <h1 className="text-5xl my-4">
                About
            </h1>
            <h3 className="text-xl py-5">
                value  : <span className="text-red-900"> {str} </span>
            </h3>
            <button className="bg-blue-500 text-white  mr-5 px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-300" onClick={() => {
                SetStr("Updated")
            }}>
                Update as Updated
            </button>

            <button className="bg-blue-500 text-white   mr-5  px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-300" onClick={() => {
                SetStr("Initial")
            }}>
                Update as Initial
            </button>
        </div>
    )
}

export default About    