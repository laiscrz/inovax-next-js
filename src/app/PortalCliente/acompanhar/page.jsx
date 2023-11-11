"use client"
import Link from "next/link";
import '/src/app/PortalCliente/portalcliente.css'
import { useEffect, useState } from "react";
import { FaTimesCircle} from "react-icons/fa"

export default function Acompanhar() {
    const [inspencao, setInspencao] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/SprintJavaPorto/api/inspecao`)
            .then(resp => resp.json())
            .then(resp => setInspencao(resp))
            .catch(error => console.error(error))
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/SprintJavaPorto/api/inspecao/${id}`, {
            method: 'DELETE'
        })
            .then(window.location = '/')
            .catch(error => console.error(error))
    }

    return (
        <main>
            <div className="portalclie-conteiner">
                <div className='acompanhar-vist'>
                    <h2>Acompanhar Vistorias Automatizadas - Inspenções</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Codigo de Serie</th>
                                <th>Analise</th>
                                <th>Custo</th>
                                <th>Data da Inspenção</th>
                                <th>Quantidade de Inspenção</th>
                                <th>Fiscalização</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                inspencao.map((acompanhar) => (
                                    <tr key={acompanhar.id}>
                                        <td>{acompanhar.codigoSerie}</td>
                                        <td>{acompanhar.analise}</td>
                                        <td>{acompanhar.custo}</td>
                                        <td>{acompanhar.dataInspencao}</td>
                                        <td>{acompanhar.qtdInspencao}</td>
                                        <td>{acompanhar.fiscalizacao}</td>
                                        <td>
                                            <button onClick={handleDelete.bind(this, acompanhar.id)} className="ver-detalhes">
                                                <FaTimesCircle /> Cancelar
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
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