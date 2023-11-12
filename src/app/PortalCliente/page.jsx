import React from 'react';
import './portalcliente.css';
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
            caminho: '/portalcliente/solicitar'
        },
        {
            texto: "Acompanhar Vistorias em Andamento",
            imagemSrc: "/Image/icon_acompa.png",
            caminho: '/portalcliente/acompanhar'
        },
        {
            texto: "Ver Histórico de Vistorias de Bicicletas",
            imagemSrc: "/image/icon_hist.png",
            caminho: '/portalcliente/historico'
        },
        {
            texto: "Visualizar Bicicletas Cadastradas",
            imagemSrc: "/Image/icon_visualizarbike.png",
            caminho: '/portalcliente/visualizar'
        },
        {
            texto: "Configurações e Dados das Contas Conectadas",
            imagemSrc: "/image/icon_config.png",
            caminho: '/portalcliente/configuracoes'
        },
        {
            texto: "Suporte ao Cliente",
            imagemSrc: "/image/icon_suporte.jpg",
            caminho: '/portalcliente/suporte'
        },
        {
            texto: "FAQ (Perguntas Frequentes)",
            imagemSrc: "/image/icon_faq.jpg",
            caminho: '/portalcliente/faq'
        },
        {
            texto: "Sair da Conta",
            imagemSrc: "image/icon_sair.jpg",
            caminho: '/'
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
                            caminho={option.caminho}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
