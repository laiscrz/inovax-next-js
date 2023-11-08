import Link from "next/link";
import '/src/app/PortalCliente/portalcliente.css'

export default function Historico() {
    const historicoVistoria = [
        {
            id: 1,
            data: '2023-09-10',
            status: 'Concluída',
            resultado: 'Sem problemas detectados',
            detalhes: 'pdf_diagnostico1',
        },
        {
            id: 2,
            data: '2023-09-05',
            status: 'Concluída',
            resultado: 'Leve desgaste no pneu traseiro',
            detalhes: 'pdf_diagnostico2',
        },
        {
            id: 3,
            data: '2023-08-28',
            status: 'Concluída',
            resultado: 'Nenhum problema encontrado',
            detalhes: 'pdf_diagnostico3',
        },
    ];

    return (
        <main>
            <div className="portalclie-conteiner">
                <div className='histo-vist'>
                    <h2>Ver Histórico de Vistorias de Bicicletas</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Data</th>
                                <th>Status</th>
                                <th>Resultado</th>
                                <th>Mais Informações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historicoVistoria.map((vistoria) => (
                                <tr key={vistoria.id}>
                                    <td>{vistoria.id}</td>
                                    <td>{vistoria.data}</td>
                                    <td>{vistoria.status}</td>
                                    <td>{vistoria.resultado}</td>
                                    <td>
                                        <button
                                            className="ver-diagnostico"
                                        >
                                            Ver Diagnóstico
                                        </button>
                                    </td>
                                </tr>
                            ))}
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