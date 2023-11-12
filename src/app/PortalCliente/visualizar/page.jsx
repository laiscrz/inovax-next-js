"use client"
import Link from "next/link";
import '/src/app/PortalCliente/portalcliente.css'
import { useEffect, useState } from "react";
import { FaTimesCircle, FaEdit } from "react-icons/fa"

export default function Visualizar() {
    const [bike, setBike] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/SprintJavaPorto/api/bike`)
            .then(resp => resp.json())
            .then(resp => setBike(resp))
            .catch(error => console.error(error))
    }, [])



    const handleDelete = (numSerie) => {
        if (numSerie) {
            fetch(`http://localhost:8080/SprintJavaPorto/api/bike/${numSerie}`, {
                method: 'DELETE'
            })
                .then(response => {
                    console.log('Resposta do servidor:', response);
                    return response.json();
                })
                .catch(error => console.error(error))
                .finally(() => {
                    window.location.reload();
                });
        } else {
            console.error('numSerie indefinido. Não é possível excluir.');
        }
    }

    return (
        <main>
            <div className="portalclie-conteiner">
                <div className='acompanhar-vist'>
                    <h2>Visualizar Bikes cadastradas - Bikes</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Número de serie</th>
                                <th>Ano da Compra</th>
                                <th>Cor</th>
                                <th>Modelo</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bike.map((visualizar, index) => (
                                    <tr key={`${visualizar.id}-${index}`}>
                                        <td>{visualizar.numSerie}</td>
                                        <td>{visualizar.anoCompra}</td>
                                        <td>{visualizar.cor}</td>
                                        <td>{visualizar.modelo}</td>
                                        <td>
                                        <Link href="/PortalCliente/visualizar/editarDados/[numSerie]" as={`/PortalCliente/visualizar/editarDados/${visualizar.numSerie}`}>
                                                <button className="ver-detalhes">
                                                    <FaEdit /> Editar Modelo
                                                </button>
                                            </Link>
                                            <button onClick={handleDelete.bind(this, visualizar.numSerie)} className="ver-detalhes">
                                                <FaTimesCircle /> Exluir
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