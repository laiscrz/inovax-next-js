"use client"
import Next, { useState } from 'react';
import '/src/app/Cadastro/cadastro.css';
export default function Cadastro({params}) {

    const userId = params.id == 0 ? '' : params.id


    const [clientes, setClientes] = useState([]);
    const [cliente, setCliente] = useState({
        nome: '',
        email: '',
        telefone: '',
        endereco: '',
        cpf: '',
        dataNascimento: '',
        senha: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCliente({ ...cliente, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        
        setClientes([...clientes, cliente]);
    
        
        try {
            const response = await fetch("http://localhost:5000/cliente/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(cliente),
            });
    
            if (response.ok) {
                console.log("Cliente add com sucesso!");
                setCliente({
                    nome: "",
                    email: "",
                    telefone: "",
                    endereco: "",
                    cpf: "",
                    senha: "",
                    sexo: "",
                });
    
                
                window.location.href = "/PortalCliente";
            } else {
                console.error("Falha ao add cliente.");
            }
        } catch (error) {
            console.error("Error:", error);
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
                            <label htmlFor="sexo">Sexo: </label><br />
                            <input
                                type="text"
                                id="sexo"
                                name="sex"
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
                            <button type="submit">Cadastrar</button>
                        </span>
                    </form>
                </div>
            </div>
        </main>
    );
}
