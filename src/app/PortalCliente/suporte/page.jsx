import Link from "next/link";
import '../portalcliente.css'


export default function Suporte() {
    return (
        <main>
            <div className="portalclie-conteiner">
                <div className="suporte-conteiner">
                    <h2>Suporte ao Cliente</h2>
                    <p>
                        A plataforma oferece recursos como tutoriais e fóruns de discussão para ajudar os usuários.
                        A qualidade do suporte fornecido pela plataforma é excelente.
                    </p><br />
                    <div className="suporte-contato">
                        <h3>Detalhes</h3>
                        <p>
                            Se você precisar de suporte adicional, entre em contato conosco através dos seguintes meios:
                        </p>
                        <ul>
                            <li>Email: <a href="mailto:inovaxfiap@gmail.com">inovaxfiap@gmail.com</a></li>
                            <li>Telefone: (11) 5555-5555</li>
                            <li>Endereço: Avenida Paulista, 1060 - Bela Vista - São Paulo - SP</li>
                        </ul>
                    </div><br />

                    <div className="suporte-recursos">
                        <h3>Recursos de Suporte</h3><br />
                        <ul>
                            <li>
                                <a href="/tutoriais/tutorial-1">Como Enviar uma Solicitação de Vistoria</a>
                            </li>
                            <li>
                                <a href="/tutoriais/tutorial-2">Acompanhando o Progresso da Vistoria</a>
                            </li>
                        </ul>
                    </div>
                    <div className="suporte-recursos">
                        <h3>Fórum de Discussão</h3>
                        <p>
                            Participe de discussões com outros usuários para compartilhar experiências e obter ajuda.
                            Visite nosso fórum de discussão <a href="/forum">aqui</a>.
                        </p>
                    </div><br />
                    <div className="suporte-recursos">
                        <h3>Fale com o Chatbot</h3>
                        <p>
                            Você também pode iniciar uma conversa com o nosso chatbot para obter ajuda instantânea.
                            Clique no botão abaixo para iniciar a conversa.
                        </p>
                        <div className="suporte-chatbot">
                            <button className='btn-chatbot'>
                                <span><img src="/image/icon_chatbot.png" alt="icon do chat bot" />Iniciar Chatbot</span>
                            </button>
                        </div>
                        <p>A Inova-X, agradece o seu contato!</p>
                    </div>


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