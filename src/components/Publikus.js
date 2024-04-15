import React from "react";
import Sor from "./Sor";
import useAdatContext from "../contexts/AdatContext";

export default function Publikus(){
    const {bejegyzesLista} = useAdatContext();
    return(
        <>
            <table className="table table-hover table-bordered table-striped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>tevékenység neve</th>
                        <th>osztály</th>
                        <th>állapot</th>
                    </tr>
                </thead>
                <tbody>
                    {bejegyzesLista.map((element, index)=>{
                        return <Sor adat={element} key={index}/>
                    })}
                </tbody>
            </table>
        </>
    )
}