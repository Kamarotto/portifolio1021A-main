import './Footer.css'
import LinkNav from './../linknav/LinkNav'
import imagem1 from "./../img/logokamarottorodape.png"

export function Footer(){
    return (
      <footer>
        <nav>
            <div className='listas'>
              <div className='logo-rodape'><img className='img-rodape' src={imagem1} alt="" />
              </div>
                <ul className='coisas-da-lista'>
                  <h3 className='titulo-rodape'>Inicio</h3>
                    <li><LinkNav url='#' texto='Home'/> </li>
                    <li><LinkNav url='#' texto='Cursos'/></li>
                    <li><LinkNav url='#' texto='Downloads'/></li>
                </ul>
                <ul className='coisas-da-lista'>
                  <h3 className='titulo-rodape'>Sobre Nós</h3>
                    <li><LinkNav url='#' texto='Informações'/></li>
                    <li><LinkNav url='#' texto='Empresa'/></li>
                    <li><LinkNav url='#' texto='Contato'/></li>
                    <li><LinkNav url='#' texto='Blog'/></li>
                </ul>
                <ul className='coisas-da-lista'>
                  <h3 className='titulo-rodape'>Suporte</h3>
                    <li><LinkNav url='#' texto='FAQ'/></li>
                    <li><LinkNav url='#' texto='Telefones'/></li>
                    <li><LinkNav url='#' texto='Chat'/></li>
                </ul>
            </div>
        </nav>
      </footer>
    )
  }


export default Footer