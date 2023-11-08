import React from 'react';
import '/src/app/PortalCliente/portalcliente.css';
import Link from 'next/link';

const MenuOption = ({ texto, imagemSrc, caminho }) => (

    <div className="menu-option">
        <Link href={caminho}>
            <img src={imagemSrc} alt={texto} className="menu-image" />
            <div className="menu-text">{texto}</div>
        </Link>
    </div>
);

export default function PortalCliente() {
    const menuOptions = [
        {
            texto: "Solicitar Nova Vistoria",
            imagemSrc: "/Image/icon_solic.png",
            caminho: '/PortalCliente/solicitar'
        },
        {
            texto: "Acompanhar Vistorias em Andamento",
            imagemSrc: "/Image/icon_acompa.png",
            caminho: '/PortalCliente/solicitar'
        },
        {
            texto: "Ver Histórico de Vistorias de Bicicletas",
            imagemSrc: "/image/icon_hist.png",
            caminho: '/PortalCliente/solicitar'
        },
        {
            texto: "Configurações da Conta",
            imagemSrc: "/image/icon_config.png",
            caminho: '/PortalCliente/solicitar'
        },
        {
            texto: "Suporte ao Cliente",
            imagemSrc: "/image/icon_suporte.jpg",
            caminho: '/PortalCliente/solicitar'
        },
        {
            texto: "FAQ (Perguntas Frequentes)",
            imagemSrc: "/image/icon_faq.jpg",
            caminho: '/PortalCliente/solicitar'
        },
        {
            texto: "Feedback",
            imagemSrc: "/image/icon_feedback.jpg",
            caminho: '/PortalCliente/solicitar'
        },
        {
            texto: "Sair da Conta",
            imagemSrc: "image/icon_sair.jpg",
            caminho: '/PortalCliente/solicitar'
        },

    ];

    return (
        <main>
            <div className="portalclie-conteiner">
                <div className="menu-options">
                    {menuOptions.map((option, index) => (
                        <MenuOption
                            key={index}
                            texto={option.texto}
                            imagemSrc={option.imagemSrc}
                            caminho={option.caminho} // Certifique-se de incluir o caminho aqui
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
