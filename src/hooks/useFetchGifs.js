import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) =>{
    const [State, setState] = useState({
        data:[],
        loading:true
    })
        
    useEffect( () => {//esto hace que se lance la peticion y coloca las imagenes
        getGifs(category)
            .then(img =>{
                setState({
                    data:img,
                    loading:false
                })
                
            });
    },[category])

    return State;
}