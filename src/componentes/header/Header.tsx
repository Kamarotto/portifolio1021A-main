import './Header.css'
import LinkNav from '../linknav/LinkNav'
function Header(){
    return(
        <header>
            <nav>
                <ul className='botoes'>
                    <li className="button">
                        <LinkNav url="/" texto='Home'/>
                    </li>
                    <li className="button">
                        <LinkNav url="/noticias" texto='Notícia'/>
                    </li>
                    <li className="button">
                        <LinkNav url="/sobre" texto='Sobre'/>
                    </li>
                    <li className="button">
                        <LinkNav url="/contato" texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header