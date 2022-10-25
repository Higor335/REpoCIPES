import "./styles.css"

export default function Receita({receita}:any){
    return (
       
            <div className="fundo">
                <h3>{receita.nome}</h3>
                {receita.secao.map((sec:any)=>(
                    <div>
                        <h5>{sec.nome}</h5>
                        <div>{sec.conteudo.map((cont:any)=>(
                            <p>{cont}</p>
                        ))}
                        </div>
                    </div>
                ))}
            </div>
        
    )
}