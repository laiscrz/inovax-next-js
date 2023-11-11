"use client"
import { useState } from 'react';
import '/src/app/PortalCliente/portalcliente.css'
import Link from 'next/link';

export default function Configuracoes() {

    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        endereco: '',
        telefone: '',
        sexo: '',
        email: '',
        anoNasc: '',
        senha: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Realize a requisição PUT para atualizar os dados do cliente
        try {
            const response = await fetch('http://localhost:5000/cliente', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Lógica de sucesso, por exemplo, redirecionar para outra página
                console.log('Dados do cliente atualizados com sucesso!');
            } else {
                // Lógica de erro, por exemplo, exibir uma mensagem de erro
                console.error('Falha ao atualizar os dados do cliente');
            }
        } catch (error) {
            console.error('Erro na requisição PUT:', error);
        }
    };


    return (
        <main>
            <div className="portalclie-conteiner">
                <div className='configuracoes-conteiner'>
                    <h2>Configurações da Conta</h2>
                    <div className="form-cadastro">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="nome">Nome Completo:</label><br />
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
                                <label htmlFor="telefone">Telefone:</label><br />
                                <input
                                    type="tel"
                                    id="telefone"
                                    name="telefone"
                                    value={formData.telefone}
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
                                <label htmlFor="cpf">CPF:</label><br />
                                <input
                                    type="text"
                                    id="cpf"
                                    name="cpf"
                                    value={formData.cpf}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="anoNasc">Ano de Nascimento: </label><br />
                                <input
                                    type="number"
                                    id="anoNasc"
                                    name="anoNasc"
                                    value={formData.anoNasc}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="sexo">Sexo: </label><br />
                                <input
                                    type="text"
                                    id="sexo"
                                    name="sexo"
                                    value={formData.sexo}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="senha">Senha:</label><br />
                                <input
                                    type="password"
                                    id="senha"
                                    name="senha"
                                    value={formData.senha}
                                    onChange={handleChange}
                                    required
                                />
                            </div><br />
                            <div className="button-container">
                                <Link href={'/PortalCliente'}>
                                    <button className="button-voltar-menu" >
                                        Voltar para o Menu
                                    </button>
                                </Link>
                                <button type="submit">Alterar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )

}