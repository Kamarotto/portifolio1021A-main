import './Header.css'
import imagem from "./../img/logokamarotto.png"
import LinkNav from './../linknav/LinkNav'

export function Header(){
    return(
        <header>
          <div className="imagem"><img src={imagem} alt="" /></div>
            <nav>
                <ul className='botoes'>
                    <li className='btn btn1'>
                        <LinkNav url="/" texto='Home'/>
                    </li>
                    <li className='btn btn1'>
                    <LinkNav url="/" texto='Notícia'/>
                    </li>
                    <li className='btn btn1'>
                    <LinkNav url="/" texto='Sobre'/>
                    </li>
                    <li className='btn btn1'>
                    <LinkNav url="/" texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header