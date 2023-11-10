"use client"
import Link from "next/link";
import '/src/app/PortalCliente/portalcliente.css'
import { useEffect, useState } from "react";

export default function Historico() {
    const [diagnostico,setDiagnostico] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/diagnostico`)
        .then(resp=> resp.json())
        .then(resp=> setDiagnostico(resp))
        .catch(error=> console.error(error))
      },[])

      const handleDelete = (id)=>{
        fetch(`http://localhost:5000/diagnostico/${id}`, {
          method:'DELETE'
        })
        .then(window.location = '/')
        .catch(error=> console.error(error))
      }

    return (
        <main>
            <div className="portalclie-conteiner">
                <div className='histo-vist'>
                    <h2>Ver Histórico de Vistorias de Bicicletas</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Registro da Avaria</th>
                                <th>Estado Geral</th>
                                <th>Danos</th>
                                <th>ID do Sinistro</th>
                                <th>Mais Informações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            diagnostico.map((historico) => (
                                <tr key={historico.id}>
                                    <td>{historico.id}</td>
                                    <td>{historico.registroAvaria}</td>
                                    <td>{historico.estadoGeral}</td>
                                    <td>{historico.danos}</td>
                                    <td>{historico.idSinistro}</td>
                                    <td>
                                        <button
                                            className="ver-diagnostico"
                                        >
                                            Ver Diagnóstico
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