// import React, { useState, useEffect } from 'react'
import { React } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export default function GrifGrid({category}) {

    // const [Images, setImages] = useState([])    
    const {data:Images, loading } = useFetchGifs(category);
    
    // useEffect(()=>{//esto hace que se lance la peticion y coloca las imagenes
    //     getGifs(category)
    //         //.then(img=> setImages(img)) //se pueden usar estos o el de abajo
    //         .then(setImages);
    // },[category])



    return (
    <>
        <h3 className="animate__animated animate__bounce">{ category }</h3>
        {loading && <p className ="animate_animated animate__flash">loading</p>}
        <div className="card-grid"> 
            
            {    
                Images.map(img =>(
                    <GifGridItem 
                    key = {img.id}
                    {...img }
                    />
                ))
                
            }
        </div>
    </>
    )
}
