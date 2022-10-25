import "./Corpo.css"
import receitas from "../../afrodite.json"
import { useState } from "react";
import Receita from "../Receita";

export default function Corpo(){
const [indice,setIndice] = useState(0);

function incrementar(){
    if(indice<(receitas.length-1)){
        setIndice(indice+1)
    }
}

function decrementar(){
    if(indice>0){
        setIndice(indice-1)
    }
}
    return (
        <>
            <div className="container">
                <div className="titulo">
                    <h1>Receitas</h1>
                    <button className="botao1" onClick={decrementar}>&#60;</button>
                    <button className="botao2" onClick={incrementar}>&gt;</button>
                </div>
                
                <div> 
                    <Receita receita={receitas[indice]} />
                </div>
            </div>

        </>
    );
}