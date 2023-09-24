"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
const gallery = () => {

    // usestate variable
    const [Images, SetImages] = useState([]);

    // for api 
    const getImages = async () => {
        try {
            const response = await axios.get("https://picsum.photos/v2/list")
            const data = response.data
            console.log(data);
            SetImages(data)
        } catch (error) {
            console.error("Error while fetch");
        }
    }

    // useEffect for direct calling without click

    useEffect(() => {
        getImages();
    }, [])


    return (
        <div className='p-10'>

            <button onClick={getImages} className=' px-5 py-3 bg-green-600 text-white  font-bold'>
                Get Images
            </button>
            <div className='p-10'>
                {
                    Images.map((img, i) => {
                        return <img key={i} src={img.download_url} width={300} height={300} className='m-10 rounded inline-block' />
                    })
                }
            </div>
        </div>
    )
}

export default gallery