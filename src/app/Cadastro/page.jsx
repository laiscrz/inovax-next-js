"use client"
import Next, { useState } from 'react';
import '/src/app/Cadastro/cadastro.css';
export default function Cadastro({params}) {



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
    
            setCliente({ ...cliente, [name]: parsedValue });
        };
    
        const handleSubmit = async (e) => {
            e.preventDefault();
        
            setClientes([...clientes, cliente]);
        
            try {
                const response = await fetch("http://localhost:8080/SprintJavaPorto/api/cliente/", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(cliente),
                });
        
                if (response.ok) {
                    console.log("Cliente adicionado com sucesso!");
                } else {
                    console.error("Falha ao adicionar cliente.");
                }
            } catch (error) {
                console.error("Erro na resposta do servidor:", error);
            }
        };
        
        
    return (
        <main className="cadastro">
            <div className="cadastro-conteiner">
                <h1>Cadastro de Cliente</h1>
                <p>Preencha os Dados Abaixo Corretamente.</p><br />
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
                            <label htmlFor="endereco">Endereço:</label><br />
                            <input
                                type="text"
                                id="endereco"
                                name="endereco"
                                value={cliente.endereco}
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
                            <label htmlFor="senha">Senha:</label><br />
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                value={cliente.senha}
                                onChange={handleInputChange}
                                required
                            />
                        </div><br />
                        <span>
                            <button type="submit" >Cadastrar</button>
                        </span>
                    </form>
                </div>
            </div>
        </main>
    );
}
