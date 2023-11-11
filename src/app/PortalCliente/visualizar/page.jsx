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

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/SprintJavaPorto/api/bike/${id}`, {
            method: 'DELETE'
        })
            .then(window.location = '/')
            .catch(error => console.error(error))
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
                                bike.map((visualizar) => (
                                    <tr key={visualizar.id}>
                                        <td>{visualizar.numSerie}</td>
                                        <td>{visualizar.anoCompra}</td>
                                        <td>{visualizar.cor}</td>
                                        <td>{visualizar.modelo}</td>
                                        <td>
                                            <Link href={`/PortalCliente/visualizar/editarDados/${visualizar.id}`}>
                                                <button className="ver-detalhes">
                                                    <FaEdit /> Editar
                                                </button>
                                            </Link>
                                            <button onClick={handleDelete.bind(this, visualizar.id)} className="ver-detalhes">
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