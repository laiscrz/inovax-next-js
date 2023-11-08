"use client"
import { useState } from 'react';
import '/src/app/PortalCliente/portalcliente.css'
import Link from 'next/link';

export default function Configuracoes() {

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        endereco: '',
        senha: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <main>
            <div className="portalclie-conteiner">
                <div className='configuracoes-conteiner'>
                    <h2>Configurações da Conta</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="nome">Nome:</label><br />
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label><br />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="endereco">Endereço:</label><br />
                            <input
                                type="text"
                                id="endereco"
                                name="endereco"
                                value={formData.endereco}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="senha">Nova Senha:</label><br />
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                value={formData.senha}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="button-container">
                            <Link href={'/PortalCliente'}>
                                <button className="button-voltar-menu" >
                                    Voltar para o Menu
                                </button>
                            </Link>
                            <button type="submit">Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}