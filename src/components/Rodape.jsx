import Link from "next/link";

export default function Rodape(){

    return(
        <footer className = 'footer-conteiner'>
            <p className="text-center">&copy; 2023 Inova-X. Todos os direitos reservados.</p>
            <div className = 'selec-integrant'>
                <Link href = {'/integrantes'}>Integrantes</Link>
            </div>
        </footer>
    )
}