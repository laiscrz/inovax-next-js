"use client"
import { useEffect, useState } from "react";
import '/src/app/PortalCliente/portalcliente.css'
import Link from "next/link";


export default function Detalhes({ params }) {

    const { id } = params;
    const detalhesId = id === '0' ? '' : id;
    const [detalhes, setDetalhes] = useState(null);
    const [seguro, setSeguro] = useState(null);
    const [sinstro, setSinistro] = useState(null);

    useEffect(() => {
        if (detalhesId) {
            fetch(`http://localhost:8080/SprintJavaPorto/api/diagnostico/${detalhesId}`)
                .then(resp => resp.json())
                .then(resp => setDetalhes(resp))
                .catch(error => console.error(error));

            fetch(`http://localhost:8080/SprintJavaPorto/api/seguro`)
                .then(resp => resp.json())
                .then(resp => setSeguro(resp[0]))
                .catch(error => console.error(error));

            fetch(`http://localhost:8080/SprintJavaPorto/api/sinistro`)
                .then(resp => resp.json())
                .then(resp => setSinistro(resp[0]))
                .catch(error => console.error(error));
        }
    }, [detalhesId]);


    return (
        <main>
            <div className="portalclie-conteiner">
                <div className="histo-vist">
                    <h2>Detalhes do Diagnóstico</h2>

                    {
                        detalhes && (
                            <form className="diagnostico">
                                <h3>Resultado de diagnostico:</h3>
                                <div className="form-group">
                                    <label htmlFor="idSinistro">ID do Sinistro:</label><br />
                                    <input
                                        type="text"
                                        id="idSinistro"
                                        name="idSinistro"
                                        readOnly
                                        value={detalhes.idSinistro}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="registroAvaria">Registro da Avaria:</label><br />
                                    <input
                                        type="text"
                                        id="registroAvaria"
                                        name="registroAvaria"
                                        readOnly
                                        value={detalhes.registroAvaria}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="estadoGeral">Estado Geral:</label><br />
                                    <input
                                        type="text"
                                        id="estadoGeral"
                                        name="estadoGeral"
                                        readOnly
                                        value={detalhes.estadoGeral}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="danos">Danos:</label><br />
                                    <input
                                        type="text"
                                        id="danos"
                                        name="danos"
                                        readOnly
                                        value={detalhes.danos}
                                    />
                                </div>
                                {
                                    seguro && (
                                        <div>
                                            <h3>Dados do Seguro:</h3>

                                            <div className="form-group">
                                                <label htmlFor="codigoSeguro">Código do Seguro:</label><br />
                                                <input
                                                    type="text"
                                                    id="codigoSeguro"
                                                    name="codigoSeguro"
                                                    readOnly
                                                    value={seguro.codigoSeguro}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="dataContratacao">Data de Contratação:</label><br />
                                                <input
                                                    type="text"
                                                    id="dataContratacao"
                                                    name="dataContratacao"
                                                    readOnly
                                                    value={seguro.dataContratacao}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="clasulas">Cláusulas:</label><br />
                                                <input
                                                    type="text"
                                                    id="clasulas"
                                                    name="clasulas"
                                                    readOnly
                                                    value={seguro.clasulas}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="pagamento">Método de Pagamento:</label><br />
                                                <input
                                                    type="text"
                                                    id="pagamento"
                                                    name="pagamento"
                                                    readOnly
                                                    value={seguro.pagamento}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="valorSeguro">Valor do Seguro:</label><br />
                                                <input
                                                    type="text"
                                                    id="valorSeguro"
                                                    name="valorSeguro"
                                                    readOnly
                                                    value={seguro.valorSeguro}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="numSerie">Número de Série da Bicicleta:</label><br />
                                                <input
                                                    type="text"
                                                    id="numSerie"
                                                    name="numSerie"
                                                    readOnly
                                                    value={seguro.numSerie}
                                                />
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    sinstro && (
                                        <div>
                                            <h3>Dados do Sinistro:</h3>

                                            <div className="form-group">
                                                <label htmlFor="idSinistro">ID do Sinistro:</label><br />
                                                <input
                                                    type="text"
                                                    id="idSinistro"
                                                    name="idSinistro"
                                                    readOnly
                                                    value={sinstro.idSinistro}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="roubo">Houve Roubo?</label><br />
                                                <input
                                                    type="text"
                                                    id="roubo"
                                                    name="roubo"
                                                    readOnly
                                                    value={sinstro.roubo}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="quebra">Quebra: </label><br />
                                                <input
                                                    type="text"
                                                    id="quebra"
                                                    name="quebra"
                                                    readOnly
                                                    value={sinstro.quebra}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="gravidade">Gravidade: </label><br />
                                                <input
                                                    type="text"
                                                    id="gravidade"
                                                    name="gravidade"
                                                    readOnly
                                                    value={sinstro.gravidade}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="valorManutencao">Valor da Manutenção: </label><br />
                                                <input
                                                    type="text"
                                                    id="valorManutencao"
                                                    name="valorManutencao"
                                                    readOnly
                                                    value={sinstro.valorManutencao}
                                                />
                                            </div>
                                        </div>
                                    )
                                }
                            </form>
                        )
                    }

                </div>
                <div className="button-container">
                    <Link href={'/PortalCliente/historico'}>
                        <button className="button-voltar-menu" >
                            Voltar para o Menu
                        </button>
                    </Link>
                </div>
            </div>
        </main >
    );
}