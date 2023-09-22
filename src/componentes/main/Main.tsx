import { useState } from 'react'
import Projeto from '../projeto/Projeto'
import camaroto from '../img/camaroto.png'
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
            titulo:'Curso de Francês IFMS',
            descricao:"Curso de francês realizado pelos cursos livres do IFMS.",
            imagem:'/frances.png',
        },
        {
            id: 2,
            titulo:'Jiu-Jitsu',
            descricao:'Atualmente sou faixa roxa de jiu jitsu, recentemente lutei na Décima Edição da Copa Amizade de Umuarama, conseguindo ficar em segundo lugar em uma categoria de 10kg a mais que a minha',
            imagem:'/jiu.png',
        },
        {   
            id: 3,
            titulo:'Informática para Internet',
            descricao: "Curso o terceiro ano de Informática para Internet no IFMS",
            imagem:'/ifms.jpeg',
        },
        {   
            id: 4,
            titulo:'Interclasse IFMS',
            descricao: "Minha turma ficou em primeiro lugar de interclasse, graças ao André (André te amo)",
            imagem:'/interclasse.png',
        }
    ]

    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
setTexto(e.target.value)
    }

    return (
        <>
        <div><img className='img-apresentacao' src={camaroto} alt="" />
        <h3 className='texto-apresentacao'>Olá, meu nome é Gustavo Camaroto, sou amado pelo Terê e pela minha namorada linda na foto acima (eu e ela rs), abaixo teremos algumas das coisas que já fiz durante o período que estive no IFMS</h3>
        </div>
       
        <hr />
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