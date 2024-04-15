import { useState } from "react";
import { createContext } from "react"
import axios from "../api/axios";
import { useEffect } from "react";
import { useContext } from "react";

const AdatContext = createContext();

export const AdatProvider = ({children})=>{
    const [bejegyzesLista, setBejegyzesLista] = useState([]);
    const [tevekenysegLista, setTevekenysegLista] = useState([]);

    const getLista = async (vegpont, callBack)=>{
        const{data} = await axios.get(vegpont);
        callBack(data);
    }

    const postAdat = async({...adat}, vegpont)=>{
        try{
            await axios.post(vegpont, adat);
            getLista("api/bejegyzes", setBejegyzesLista);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getLista("api/bejegyzes", setBejegyzesLista);
        getLista("api/tevekenysegs", setTevekenysegLista);
    }, []);

    return(
        <AdatContext.Provider value={{bejegyzesLista, tevekenysegLista, postAdat}}>
            {children}
        </AdatContext.Provider>
    );
}

export default function useAdatContext(){
    return useContext(AdatContext);
}