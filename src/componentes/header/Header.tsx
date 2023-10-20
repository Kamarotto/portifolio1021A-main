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
                        <LinkNav to="/">Home</LinkNav>
                    </li>
                    <li className='btn btn1'>
                        <LinkNav to="/">Notícias</LinkNav>
                    </li>
                    <li className='btn btn1'>
                        <LinkNav to="/">Sobre</LinkNav>
                    </li>
                    <li className='btn btn1'>
                        <LinkNav to="/">Contato</LinkNav>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header