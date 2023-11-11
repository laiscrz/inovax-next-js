"use client"

import Link from "next/link";
import { useState } from "react";
import '/src/app/PortalCliente/portalcliente.css'

export default function Solicitar() {
    const [formSolic, setFormSolic] = useState({
        numSerie: '',
        anoCompra: '',
        cor: '',
        modelo: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Convertendo o ano de compra para número
        const formSolicToSend = {
            ...formSolic,
            anoCompra: parseInt(formSolic.anoCompra, 10),
        };

        try {
            const response = await fetch("http://localhost:8080/SprintJavaPorto/api/bike", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formSolicToSend),
            });

            if (response.ok) {
                console.log("Solicitação enviada com sucesso!");
                
                setFormSolic({
                    numSerie: '',
                    anoCompra: '',
                    cor: '',
                    modelo: '',
                });
                
                window.alert("Solicitação enviada com sucesso!");
            } else {
                console.error("Falha ao enviar solicitação.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormSolic({
            ...formSolic,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            console.log(`Arquivo selecionado: ${selectedFile.name}`);
        }
    };


    return (
        <main>
            <div className="portalclie-conteiner">
                <div className='solic-vist'>
                    <br />
                    <h2>Solicitar Nova Vistoria - Dados da Bike</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="numSerie">Número de Série da Bicicleta:</label><br />
                            <input
                                type="text"
                                id="numSerie"
                                name="numSerie"
                                value={formSolic.numSerie}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="anoCompra">Ano de Compra da Bicicleta:</label><br />
                            <input
                                type="number"
                                id="anoCompra"
                                name="anoCompra"
                                value={formSolic.anoCompra}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cor">Cor da Bicicleta:</label><br />
                            <input
                                type="text"
                                id="cor"
                                name="cor"
                                value={formSolic.cor}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="modelo">Modelo da Bicicleta:</label><br />
                            <input
                                type="text"
                                id="modelo"
                                name="modelo"
                                value={formSolic.modelo}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="imagensBicicleta">Imagens ou Vídeos da Bicicleta:</label><br />
                            <input
                                type="file"
                                id="imagensBicicleta"
                                name="imagensBicicleta"
                                accept="image/*, video/*"
                                multiple
                                onChange={handleFileChange}
                            /> <br />
                            <p>Por favor, envie imagens ou vídeos da bicicleta a partir de diferentes ângulos <br /> para uma melhor visualização.</p>
                        </div><br />
                        <div className="button-container">
                            <Link href={'/PortalCliente'}>
                                <button className="button-voltar-menu" >
                                    Voltar para o Menu
                                </button>
                            </Link>

                            <button type="submit">Enviar Solicitação</button>
                        </div>
                    </form>
                </div>
            </div>

        </main>
    )
}