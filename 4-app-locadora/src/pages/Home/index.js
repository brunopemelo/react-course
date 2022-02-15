import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./home.css";
import api from "../../services/api";

export default function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes() {
            // sujeitoprogramador.com + r-api/?api=filmes/
            const response = await api.get("r-api/?api=filmes/");
            //console.log(response)
            //console.log(response.data)
            setFilmes(response.data);
        }

        loadFilmes();
    });

    return (
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.nome}</strong>
                            <img src={filme.foto} alt={filme.nome}></img>

                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}
