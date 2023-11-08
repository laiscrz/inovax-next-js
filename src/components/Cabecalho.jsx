import Image from "next/image";
import Link from "next/link";

export default function Cabecalho() {

    return (
        <header className='cabecalho-conteiner'>
            <img src="/Image/logoinovax_bik.png" alt="Logo Inovax" className="logo"/>
            <nav className="nav-menu">
                <div className='navegacao-links'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/ComoFunciona'}>Como Funciona</Link>
                    <Link href={'/Servicos'}>Serviços</Link>
                    <Link href={'/SobreNos'}>Sobre Nós</Link>
                    <Link href={'/Contato'}>Contato</Link>

                </div>
                <div className="acessar-login">
                    <Link href={'/Login'}>
                        <button id="btnLogin">
                            <span><Image src={'/Image/profile_icon.png'} alt="Profile Icon" width={'30'} height={'30'} />Login</span>
                        </button>
                    </Link>
                </div>
            </nav>

        </header>



    )
}