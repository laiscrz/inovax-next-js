"use client"
import Link from "next/link";
import '../portalcliente.css'
import { useEffect, useState } from "react";
import { FaTimesCircle } from "react-icons/fa"

export default function Acompanhar() {
    const [inspencao, setInspencao] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/SprintJavaPorto/api/inspecao`)
            .then(resp => resp.json())
            .then(resp => setInspencao(resp))
            .catch(error => console.error(error))
    }, [])

    const handleDelete = (codigoSerie) => {
        if (codigoSerie) {
            fetch(`http://localhost:8080/SprintJavaPorto/api/inspecao/${codigoSerie}`, {
                method: 'DELETE'
            })
                .then(response => {
                    console.log('Resposta do servidor:', response);
                    return response.json();
                })
                .catch(error => console.error(error))
        } else {
            console.error('codigoSerie indefinido. Não é possível excluir.');
        }
    }

        return (
            <main>
                <div className="portalclie-conteiner">
                    <div className='acompanhar-vist'>
                        <h2>Acompanhar Vistorias Automatizadas - Inspeções</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Codigo de Serie</th>
                                    <th>Analise</th>
                                    <th>Custo</th>
                                    <th>Data da Inspeção</th>
                                    <th>Quantidade de Inspeção</th>
                                    <th>Fiscalização</th>
                                    <th>Opções</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    inspencao.map((acompanhar, index) => (
                                        <tr key={`${acompanhar.id}-${index}`}>
                                            <td>{acompanhar.codigoSerie}</td>
                                            <td>{acompanhar.analise}</td>
                                            <td>{acompanhar.custo}</td>
                                            <td>{acompanhar.dataInspecao}</td>
                                            <td>{acompanhar.qtdInspecao}</td>
                                            <td>{acompanhar.fiscalizacao}</td>
                                            <td>
                                                <button onClick={handleDelete.bind(this, acompanhar.codigoSerie)} className="ver-detalhes">
                                                    <FaTimesCircle /> Cancelar
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <div className="button-container">
                            <Link href={'/portalcliente'}>
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
