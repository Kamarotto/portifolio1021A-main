import './Footer.css'
import Link from './../link/Link'
import imagem1 from "./../img/logokamarottorodape.png"
<link href='https://unpkg.com/css.gg@2.0.0/icons/css/instagram.css' rel='stylesheet'></link>

export function Footer(){
    return (
      <footer>
        <nav>
            <div className='listas'>
              <div className='logo-rodape'><img className='img-rodape' src={imagem1} alt="" />
              </div>
                <ul className='coisas-da-lista'>
                  <h3 className='titulo-rodape'>Inicio</h3>
                    <li> <Link texto='Home'/> </li>
                    <li><Link texto='Cursos'/></li>
                    <li><Link texto='Downloads'/></li>
                </ul>
                <ul className='coisas-da-lista'>
                  <h3 className='titulo-rodape'>Sobre Nós</h3>
                    <li><Link texto='Informações'/></li>
                    <li><Link texto='Empresa'/></li>
                    <li><Link texto='Contato'/></li>
                    <li><Link texto='Blog'/></li>
                </ul>
                <ul className='coisas-da-lista'>
                  <h3 className='titulo-rodape'>Suporte</h3>
                    <li><Link texto='FAQ'/></li>
                    <li><Link texto='Telefones'/></li>
                    <li><Link texto='Chat'/></li>
                </ul>
            </div>
        </nav>
      </footer>
    )
  }


export default Footer