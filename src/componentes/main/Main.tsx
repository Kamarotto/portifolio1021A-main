import { useState } from 'react'
import Projeto from '../projeto/Projeto'
import './Main.css'
type ProjetoType = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}

export default function Main() {
    const [texto,setTexto]=useState("")

    const projetos:ProjetoType[] = [
        {
            id:1,
            titulo:'Banda Musical Tom Jobim',
            descricao:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:'/barbie.png',
        },
        {
            id: 2,
            titulo:'Festival de Arte e Cultura IFMS',
            descricao:'Logo após o arco-íris, em um mundo chamado Fairytopia, vive Elina, uma bela fada das flores que sonha em ter asas. Um dia, Elina percebe que sua casa de flor está doente e seus amigos não podem mais voar. Cheia de coragem, ela parte em uma fantástica jornada para encontrar Azura, a guardiã da Cidade das Fadas, já que ela não é afetada pelo feitiço que causou todos os problemas.',
            imagem:'/fairytopia.jpg',
        },
        {   
            id: 3,
            titulo:'Informática para Internet',
            descricao: "Mundos mágicos, fadas e cavalos voadores são alguns dos elementos encontrados neste filme da Barbie. Ela precisa viajar a um mundo encantado para salvar Ken. Nesta aventura, serão revelados segredos e algumas amizades serão testadas.",
            imagem:'/segredo-das-fadas.jpg',
        }
    ]

    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        //Como eu faço para mudar o texto para "TERE"
        setTexto(e.target.value)
    }

    return (
        <>
            <div className="campo-de-pesquisa">
                <p>Buscar um projeto:</p>
                <input type="text" placeholder='Pesquisar...' onChange={TrataTexto} />
                       {texto && <p>Resultados para: {texto} </p>}
            </div>
            <main className="content-main">
                {   
                    projetos.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto)).map(
                        (projeto)=>
                            <Projeto 
                                key={projeto.id}
                                descricao={projeto.descricao}
                                titulo={projeto.titulo}
                                imagem={projeto.imagem}
                            />
                    )
                }
            </main>
        </>
    )
}