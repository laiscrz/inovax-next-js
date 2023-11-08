import Link from "next/link";
import '/src/app/PortalCliente/portalcliente.css'


export default function Acompanhar() {
    const acompanhamentoVistoria = [
        {
            id: 1,
            data: '2023-09-10',
            status: 'Em Andamento',
            resultado: 'Sem problemas detectados',
            detalhes: 'Informações Adicionais.',
        },
        {
            id: 2,
            data: '2023-09-05',
            status: 'Em Andamento',
            resultado: 'Leve desgaste no pneu traseiro',
            detalhes: 'Informações Adicionais.',
        },
        {
            id: 3,
            data: '2023-08-28',
            status: 'Em Andamento',
            resultado: 'Nenhum problema encontrado',
            detalhes: 'Informações Adicionais.',
        },
    ];



    return (
        <main>
            <div className="portalclie-conteiner">
                <div className='acompanhar-vist'>
                    <h2>Acompanhar Vistorias Automatizadas</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Data</th>
                                <th>Status</th>
                                <th>Resultado</th>
                                <th>Detalhes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {acompanhamentoVistoria.map((vistoria) => (
                                <tr key={vistoria.id}>
                                    <td>{vistoria.id}</td>
                                    <td>{vistoria.data}</td>
                                    <td>{vistoria.status}</td>
                                    <td>{vistoria.resultado}</td>
                                    <td>
                                        <button className="ver-detalhes">
                                            Ver Detalhes
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