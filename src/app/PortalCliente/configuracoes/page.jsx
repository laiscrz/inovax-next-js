"use client"
import '../portalcliente.css'
import { useEffect, useState } from 'react';
import Link from 'next/link';

import { FaEdit, FaTimesCircle } from 'react-icons/fa';


export default function Configuracoes() {
    const [cliente, setCliente] = useState([]);


    useEffect(() => {
        fetch('http://localhost:8080/SprintJavaPorto/api/cliente')
            .then((response) => response.json())
            .then((data) => setCliente(data))
            .catch((error) => console.error('Erro na requisição GET:', error));
    }, []);

    const handleDelete = (cpf) => {
        if (cpf) {
            fetch(`http://localhost:8080/SprintJavaPorto/api/cliente/${cpf}`, {
                method: 'DELETE'
            })
                .then(response => {
                    console.log('Resposta do servidor:', response);
                    return response.json();
                })
                .then(data => {
                    console.log('Cliente excluído:', data);
                })
                .catch(error => {
                    console.error(error);
                })
                .finally(() => {
                    window.location.reload();
                });
        } else {
            console.error('CPF indefinido. Não é possível excluir.');
        }
    }

    return (
        <main>
            <div className="portalclie-conteiner">
                <div className="configuracoes-conteiner">
                    <h2>Configurações e Dados das Contas Conectadas</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Endereço</th>
                                <th>Telefone</th>
                                <th>Sexo</th>
                                <th>Email</th>
                                <th>Ano de Nascimento</th>
                                <th>Senha</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cliente.map((configuracoes, index) => (
                                <tr key={`${configuracoes.cpf}-${index}`}>
                                    <td>{configuracoes.nome}</td>
                                    <td>{configuracoes.cpf}</td>
                                    <td>{configuracoes.endereco}</td>
                                    <td>{configuracoes.telefone}</td>
                                    <td>{configuracoes.sexo}</td>
                                    <td>{configuracoes.email}</td>
                                    <td>{configuracoes.anoNasc}</td>
                                    <td>{configuracoes.senha}</td>
                                    <td>
                                        <Link href="/PortalCliente/configuracoes/alterarDados/[cpf]" as={`/PortalCliente/configuracoes/alterarDados/${configuracoes.cpf}`}>
                                            <button className="ver-detalhes">
                                                <FaEdit /> Editar Endereço
                                            </button>
                                        </Link>
                                        <button onClick={handleDelete.bind(this, configuracoes.cpf)} className="ver-detalhes">
                                            <FaTimesCircle /> Exluir
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="button-container">
                        <Link href={'/PortalCliente'}>
                            <button className="button-voltar-menu">
                                Voltar para o Menu
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
