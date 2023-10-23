export default function Cabecalho(){

    return(
        <header className = 'cabecalho-conteiner'>
            <Image/>
            <nav>
                <div className = 'navegacao-links'>
                    <Link href = {'/'}>Home</Link>
                    <Link href = {'/ComoFunciona'}>Como Funciona</Link>
                    <Link href = {'/Servicos'}>Serviços</Link>
                    <Link href = {'/SobreNos'}>Sobre Nós</Link>
                    <Link href = {'/Contato'}>Contato</Link>
                </div>
            </nav>
        </header>
    )
}