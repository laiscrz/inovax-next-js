"use client"

import Link from "next/link";
import { useState } from "react";

export default function SolicitarNovaVistoria() {
    const [formSolic, setFormSolic] = useState({
        nome: '',
        endereco: '',
        numeroSerie: '',
        modelo: '',
        marca: '',
        cor: '',
        anoFabricacao: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
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
                    <h2>Solicitar Nova Vistoria</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nome">Nome:</label><br />
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                value={formSolic.nome}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="endereco">Endereço:</label><br />
                            <input
                                type="text"
                                id="endereco"
                                name="endereco"
                                value={formSolic.endereco}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="numeroSerie">Número de Série da Bicicleta:</label><br />
                            <input
                                type="text"
                                id="numeroSerie"
                                name="numeroSerie"
                                value={formSolic.numeroSerie}
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
                            <label htmlFor="marca">Marca da Bicicleta:</label><br />
                            <input
                                type="text"
                                id="marca"
                                name="marca"
                                value={formSolic.marca}
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
                            <label htmlFor="anoFabricacao">Ano de Fabricação da Bicicleta:</label><br />
                            <input
                                type="text"
                                id="anoFabricacao"
                                name="anoFabricacao"
                                value={formSolic.anoFabricacao}
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