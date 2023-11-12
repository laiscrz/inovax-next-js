"use client"
import '/src/app/PortalCliente/portalcliente.css'
import Link from "next/link";
import { useEffect, useState } from "react"

export default function AlterarDados({ params }) {
    const cpfClie = params.cpf || '';


    const [novo, setNovo] = useState({
        endereco: ''
    })

    const [dadosAtuais, setDadosAtuais] = useState({
        nome: params.nome,
        cpf: params.cpf,
        endereco: params.endereco,
        telefone: params.telefone,
        sexo: params.sexo,
        email: params.email,
        anoNasc: params.anoNasc,
        senha: params.senha
    })

    const handleChange = e => {

        setNovo({ ...novo, endereco: e.target.value });
    }

    useEffect(() => {
        console.log("CPF:", cpfClie);
        if (cpfClie) {
            fetch(`http://localhost:8080/SprintJavaPorto/api/cliente/${cpfClie}`)
                .then(resp => resp.json())
                .then(data => {

                    setDadosAtuais(data);
                    setNovo({
                        endereco: data.endereco
                    });
                })
                .catch(error => console.error(error));
        }
    }, [cpfClie]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/SprintJavaPorto/api/cliente/${cpfClie}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ endereco: novo.endereco, cpf: cpfClie })
        })
            .then(response => {
                console.log('Resposta do servidor:', response);

                if (!response.ok) {
                    throw new Error('Erro ao atualizar os dados do cliente');
                }

                return response.json();
            })
            .then(data => {
                console.log('Dados atualizados:', data);
                window.location.href = '/PortalCliente/configuracoes';
            })
            .catch(error => {
                console.error(error);
            });
    };


    return (
        <main>
            <div className="portalclie-conteiner">
                <div className="configuracoes-conteiner">
                    <h2>Editar Cliente contas cadastradas - Cliente com o CPF: {dadosAtuais.cpf}</h2>
                    <p>Abaixo digite o novo endereco:</p>
                    <form onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label htmlFor="endereco">Novo Endereço:</label><br />
                            <input
                                type="text"
                                id="endereco"
                                name="endereco"
                                value={novo.endereco}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="button-container">
                            <Link href={'/PortalCliente/configuracoes'}>
                                <button className="button-voltar-menu" >
                                    Voltar para anterior
                                </button>
                            </Link>

                            <button type="submit">Enviar Alterações</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}