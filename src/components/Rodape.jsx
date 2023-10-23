import Link from "next/link";

export default function Rodape(){

    return(
        <footer className = 'footer-conteiner'>
            <section className = 'redes-sociais'>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
            </section>
            <p className="text-center">&copy; 2023 Inova-X. Todos os direitos reservados.</p>
            <div className = 'selec-integrant'>
                <Link href = {'/Integrantes'}>Integrantes</Link>
            </div>
        </footer>
    )
}