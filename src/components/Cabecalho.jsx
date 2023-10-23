import Image from "next/image";
import Link from "next/link";

export default function Cabecalho() {

    return (
        <header className='cabecalho-conteiner'>
            <Image src={'/Image/logoinovax_bik.png'} alt="Logo Inovax" width={'120'} height={'120'} />
            <nav>
                <div className='navegacao-links'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/ComoFunciona'}>Como Funciona</Link>
                    <Link href={'/Servicos'}>Serviços</Link>
                    <Link href={'/SobreNos'}>Sobre Nós</Link>
                    <Link href={'/Contato'}>Contato</Link>
                </div>
            </nav>
            <div>
                <Link href={'/Login'}>
                    <button id="btnLogin">
                        <span><Image src={'/Image/profile_icon.png'} alt="Profile Icon" width={'30'} height={'30'}/>Login</span>
                    </button>
                </Link>
            </div>
        </header>
    )
}