import React, { useState } from "react";
import useAdatContext from "../contexts/AdatContext";

export default function Urlap(){
    const {tevekenysegLista, postAdat, setBejegyzesLista } = useAdatContext();
    const osztalyLista = ["SZFJA", "SZF18", "SZF2A", "SZF2B"];

    const [osztaly, setOsztaly] = useState("valassz");
    const [tevekenyseg, setTevekenyseg] = useState("valassz");

    function kuld(event){
        event.preventDefault();

        let adat = {
            tevekenyseg_id:tevekenyseg,
            osztaly_id:osztaly,
            allapot: 0,
        };
        if(!(osztaly === "valassz" || tevekenyseg === "valassz")){
            postAdat(adat, "api/bejegyzes", setBejegyzesLista);
        }else{
            console.log("hibás adatok");
        }
    }

    return(
        <form className="my-3" onSubmit={kuld}>
        <select className="form-select" 
                id="osztaly"
                name="osztaly"
                onChange={(event)=>{
                    setOsztaly(event.target.value);
                }}>
                <option value="valassz">Válassz osztályt</option>
                    {osztalyLista.map((element, index)=>{
                        return(
                            <option key = {index} value = {element}>
                            {element}
                            </option>
                        )
                    })}
                    </select>
                    <select className="form-select" 
                        id="tevekenyseg"
                        name="tevekenyseg"
                        onChange={(event)=>{
                        setTevekenyseg(event.target.value)
                }}>
                    <option value="valassz">Válassz tevékenységet!</option>
                        {tevekenysegLista.map((element, index)=>{
                            return(
                                <option value={element.tevekenyseg_id} key={index}>
                                    {element.tevekenyseg_nev}
                                </option>
                            );
                        })}
                    </select>
                    <input type="submit"
                            className="btn btn-success"
                            value= "Küld"
                            id="submit" />

        </form>
    )
}