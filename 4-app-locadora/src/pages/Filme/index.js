import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./filme-info.css";
import api from "../../services/api";
import { toast } from "react-toastify";

export default function Filme() {
    const { id } = useParams();
    const history = useHistory();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme() {
            const response = await api.get(`r-api/?api=filmes/${id}`);

            if (response.data.length === 0) {
                // Se acessar ID que não existe, volta pra home
                history.replace("/");
                return;
            }

            setFilme(response.data);
            setLoading(false);
        }
        loadFilme();

        return () => {
            console.log("Componente desmontado!");
        };
    }, [history, id]);

    function salvaFilme() {
        const minhaLista = localStorage.getItem("filmes");

        let filmesSalvos = JSON.parse(minhaLista) || []; // Caso esteja vazio

        // Se tiver algum filme salvo com o mesmo ID, ignore
        const hasFilme = filmesSalvos.some(
            (filmeSalvo) => filmeSalvo.id === filme.id
        );

        if (hasFilme) {
            toast.error("Este filme já está salvo!");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("filmes", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso!");
    }

    if (loading) {
        return (
            <div className="filme-info">
                <h1>Carregando seu filme...</h1>
            </div>
        );
    }

    return (
        <div className="filme-info">
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome}></img>
            <h3>Sinopse</h3>
            {filme.sinopse}
            <div className="botoes">
                <button onClick={salvaFilme}>Salvar</button>
                <button>
                    <a
                        target="blank"
                        href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}
                    >
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    );
}
