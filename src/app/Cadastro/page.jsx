"use client"
import '/src/app/Cadastro/cadastro.css';

import React, { useState } from 'react';

export default function Cadastro() {
    const [clientes, setClientes] = useState([]);
    const [cliente, setCliente] = useState({
        nome: '',
        cpf: '',
        endereco: '',
        telefone: '',
        sexo: '',
        email: '',
        anoNasc: '',
        senha: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const parsedValue = name === 'anoNasc' ? parseInt(value, 10) : value;

        
        if (name.startsWith('endereco.')) {
            const enderecoProperty = name.split('.')[1]; 
            setCliente({
                ...cliente,
                endereco: {
                    ...cliente.endereco,
                    [enderecoProperty]: parsedValue,
                },
            });
        } else {
            setCliente({ ...cliente, [name]: parsedValue });
        }
    };

    const formatEndereco = () => {
        const { endereco } = cliente;
        return endereco; 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const clienteComEnderecoFormatado = {
            ...cliente,
            endereco: formatEndereco(),
        };

        setClientes([...clientes, clienteComEnderecoFormatado]);

        try {
            const response = await fetch("http://localhost:5000/cliente", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(clienteComEnderecoFormatado),
            });

            if (response.ok) {
                console.log("Cliente adicionado com sucesso!");
                window.location.href = '/PortalCliente';
            } else {
                console.error("Falha ao adicionar cliente.");
            }
        } catch (error) {
            console.error("Erro na resposta do servidor:", error);
        }
    };

    const buscarCep = (e) => {
        const cep = e.target.value.replace(/\D/g, '');

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                setCliente({
                    ...cliente,
                    endereco: `${data.logradouro || ''}, ${data.bairro || ''}, ${data.localidade || ''}, ${data.uf || ''}, ${cep}`,
                });
            })
            .catch((error) => {
                console.error("Erro ao buscar CEP:", error);
            });
    };

    return (
        <main className="cadastro">
            <div className="cadastro-conteiner">
                <h1>Cadastro de Cliente</h1>
                <p>Preencha os Dados Abaixo Corretamente.</p>
                <div className="form-cadastro">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nome">Nome Completo:</label><br />
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                value={cliente.nome}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label><br />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={cliente.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefone">Telefone:</label><br />
                            <input
                                type="tel"
                                id="telefone"
                                name="telefone"
                                value={cliente.telefone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cpf">CPF:</label><br />
                            <input
                                type="text"
                                id="cpf"
                                name="cpf"
                                value={cliente.cpf}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="anoNasc">Ano de Nascimento: </label><br />
                            <input
                                type="number"
                                id="anoNasc"
                                name="anoNasc"
                                value={cliente.anoNasc}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sexo">Sexo: </label><br />
                            <input
                                type="text"
                                id="sexo"
                                name="sexo"
                                value={cliente.sexo}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="endereco">Endereço:</label><br />
                            <input
                                type="text"
                                id="cep"
                                placeholder="CEP"
                                onChange={buscarCep}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Endereço Completo:</label><br />
                            <input
                                type="text"
                                id="endereco"
                                name="endereco"
                                value={formatEndereco()}
                                readOnly
                            />

                        </div>
                        <div className="form-group">
                            <label htmlFor="senha">Senha:</label><br />
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                value={cliente.senha}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <br />
                        <span>
                            <button type="submit">Cadastrar</button>
                        </span>
                    </form>
                </div>
            </div>
        </main>
    );
}
