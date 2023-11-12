"use client"
import Link from "next/link";
import '/src/app/PortalCliente/portalcliente.css'
import { useEffect, useState } from "react";
import { FaTimesCircle } from "react-icons/fa";

export default function Historico() {
    const [diagnostico, setDiagnostico] = useState([]);
    const [seguro, setSeguro] = useState(null);
    const [sinistro, setSinistro] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/SprintJavaPorto/api/diagnostico/`)
        .then(resp => resp.json())
        .then(resp => setDiagnostico(resp))
        .catch(error => console.error(error));

        fetch(`http://localhost:8080/SprintJavaPorto/api/seguro`)
        .then(resp => resp.json())
        .then(resp => setSeguro(Array.isArray(resp) ? resp : [resp[0]]))
        .catch(error => console.error(error));

    fetch(`http://localhost:8080/SprintJavaPorto/api/sinistro`)
        .then(resp => resp.json())
        .then(resp => setSinistro(Array.isArray(resp) ? resp : [resp]))
        .catch(error => console.error(error));
    }, []);

    const handleDelete = (tipoRecurso, id) => {
        if (tipoRecurso && id) {
            const apiUrl = `http://localhost:8080/SprintJavaPorto/api/${tipoRecurso}/${id}`;
    
            fetch(apiUrl, {
                method: 'DELETE'
            })
                .then(response => {
                    console.log('Resposta do servidor:', response);
                    return response.json();
                })
                .then(data => {
                    console.log('Recurso excluído com sucesso:', data);
                })
                .catch(error => console.error(error));
        } else {
            console.error('Parâmetros inválidos. Não é possível excluir.');
        }
    }

    return (
        <main>
            <div className="portalclie-conteiner">
                <div className='histo-vist'>
                    <h2>Histórico de Vistorias de Bicicletas - Diagnosticos</h2>
                    <h2>Detalhes dos Diagnósticos Gerais : </h2>

                    {diagnostico.length > 0 && (
                        <form className="diagnostico">
                            <h3>Resultado de diagnóstico:</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Danos</th>
                                        <th>ID do Sinistro</th>
                                        <th>Estado Geral</th>
                                        <th>Registro da Avaria</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {diagnostico.map((detalhes, index) => (
                                        <tr key={`${detalhes.id}-${index}`}>
                                            <td>{detalhes.idSinistro}</td>
                                            <td>{detalhes.registroAvaria}</td>
                                            <td>{detalhes.estadoGeral}</td>
                                            <td>{detalhes.danos}</td>
                                            <td>
                                                <button onClick={() => handleDelete('diagnostico', detalhes.registroAvaria)}  className="ver-diagnostico">
                                                    <FaTimesCircle /> Excluir
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </form>
                    )}

                    {seguro && (
                        <div>
                            <h3>Dados do Seguro:</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Código do Seguro</th>
                                        <th>Data da Contratação</th>
                                        <th>Cláusulas</th>
                                        <th>Tipo de Pagamento</th>
                                        <th>Valor do Seguro</th>
                                        <th>Número de Série</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {seguro.map((seguro, index) => (
                                    <tr key={`${seguro.id}-${index}`}>
                                        <td>{seguro.codigoSeguro}</td>
                                        <td>{seguro.dataContratacao}</td>
                                        <td>{seguro.clausulas}</td>
                                        <td>{seguro.pagamento}</td>
                                        <td>{seguro.valorSeguro}</td>
                                        <td>{seguro.numSerie}</td>
                                        <td>
                                            <button onClick={() => handleDelete('seguro', seguro.numSerie)} className="ver-diagnostico">
                                                <FaTimesCircle /> Excluir
                                            </button>
                                        </td>
                                    </tr>
                                     ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {sinistro && (
                        <div>
                            <h3>Dados do Sinistro:</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID do Sinistro</th>
                                        <th>Houve Roubo?</th>
                                        <th>Quebra</th>
                                        <th>Gravidade</th>
                                        <th>Valor da Manutenção</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {sinistro.map((sinistro, index) => (
                                    <tr key={`${sinistro.id}-${index}`}>
                                        <td>{sinistro.idSinistro}</td>
                                        <td>{sinistro.roubo}</td>
                                        <td>{sinistro.quebra}</td>
                                        <td>{sinistro.gravidade}</td>
                                        <td>{sinistro.valorManutencao}</td>
                                        <td>
                                            <button onClick={() => handleDelete('sinistro', sinistro.idSinistro)} className="ver-diagnostico">
                                                <FaTimesCircle /> Excluir
                                            </button>
                                        </td>
                                    </tr>
                                 ))}
                                </tbody>
                            </table>
                        </div>
                    )
                    }
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