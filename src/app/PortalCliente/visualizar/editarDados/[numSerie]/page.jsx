"use client"
import Link from "next/link"
import '/src/app/PortalCliente/portalcliente.css'
import { useEffect, useState } from "react"

export default function EditarDados({ params }) {

    const numeroSerie = params.numSerie || '';

    const [novo, setNovo] = useState({
        modelo: ''
    })

    const [dadosAtuais, setDadosAtuais] = useState({
        numSerie: params.numSerie,
        anoCompra: params.anoCompra,
        cor: params.cor,
        modelo: params.modelo
    });

    const handleChange = e => {
        
        setNovo({ ...novo, modelo: e.target.value });
    }

    
    useEffect(() => {
        console.log("Número de Série:", numeroSerie);
        if (numeroSerie) {
            fetch(`http://localhost:8080/SprintJavaPorto/api/bike/${numeroSerie}`)
                .then(resp => resp.json())
                .then(data => {
                    
                    setDadosAtuais(data);
                    setNovo({
                        modelo: data.modelo
                    });
                })
                .catch(error => console.error(error));
        }
    }, [numeroSerie]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/SprintJavaPorto/api/bike/${numeroSerie}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ modelo: novo.modelo }) 
        })
        .then(response => {
            console.log('Resposta do servidor:', response);
    
            if (!response.ok) {
                throw new Error('Erro ao atualizar os dados da bicicleta');
            }
    
            return response.json();
        })
        .then(data => {
            console.log('Dados atualizados:', data);
            window.location.href = '/PortalCliente/visualizar';
        })
        .catch(error => {
            console.error(error);
        });
    };

    return (
        <main>
            <div className="portalclie-conteiner">
                <div className='acompanhar-vist'>
                    <h2>Editar Bikes cadastradas - Bike com o Número de serie: {dadosAtuais.numSerie}</h2>
                    <p>Abaixo digite o novo modelo:</p>
                    <form onSubmit={handleSubmit}>
                        
                        <div className="form-group">
                            <label htmlFor="modelo">Modelo da Bicicleta:</label><br />
                            <input
                                type="text"
                                id="modelo"
                                name="modelo"
                                value={novo.modelo}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="button-container">
                            <Link href={'/PortalCliente/visualizar'}>
                                <button className="button-voltar-menu" >
                                    Voltar para anterior
                                </button>
                            </Link>

                            <button type="submit">Enviar Alterações</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}