import Link from "next/link";
import '../portalcliente.css'



export default function Faq() {

    const faqItems = [
        {
            question: '1. Como funciona o processo de vistoria de bicicletas online?',
            answer: 'O nosso processo de vistoria de bicicletas online utiliza tecnologias avançadas para capturar e analisar imagens e vídeos da bicicleta. A análise é feita automaticamente para identificar avarias e validar a autenticidade das mídias enviadas, tudo sem intervenção humana.'
        },
        {
            question: '2. Como faço para agendar uma vistoria?',
            answer: 'Para agendar uma vistoria, você precisa criar uma conta em nosso site e seguir as instruções para enviar as imagens e vídeos da bicicleta. Nossa plataforma irá processar as informações e fornecer um relatório de vistoria.'
        },
        {
            question: '3. Como garantir a segurança e autenticidade do processo de vistoria?',
            answer: 'Nosso sistema utiliza técnicas avançadas de reconhecimento de padrões e validação de mídia para garantir a autenticidade das informações. Além disso, implementamos medidas de segurança rigorosas para proteger seus dados.'
        },
    ];


    return (
        <main>
            <div className="portalclie-conteiner">
                <div className="faq-conteiner">
                    <h2>FAQ (Perguntas Frequentes)</h2>
                    <ul>
                        {faqItems.map((item, index) => (
                            <li key={index}>
                                <strong>{item.question}</strong>
                                <p>{item.answer}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="button-container">
                        <Link href={'/PortalCliente'}>
                            <button className="button-voltar-menu" >
                                Voltar para o Menu
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}