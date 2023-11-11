"use client"
import Link from "next/link"
import '/src/app/PortalCliente/portalcliente.css'
import { useEffect, useState } from "react"

export default function EditarDados({params}) {

    const { id } = params;
    const visualizarId = id === '0' ? '' : id;


    const [novo, setNovo] = useState({
        numSerie: '',
        anoCompra: '',
        cor: '',
        modelo: ''
    })


    const handleChange = e =>{
        setNovo({...novo, [e.target.name]:e.target.value})
    }

    useEffect(()=>{
        if(visualizarId){
            fetch(`http://localhost:8080/SprintJavaPorto/api/bike/${visualizarId}`)
            .then(resp=> resp.json())
            .then(resp=> setNovo(resp))
            .catch(error=> console.error(error))
        }
    },[visualizarId])

    const handleSubmit = e =>{
        e.preventDefault()
        fetch(`http://localhost:8080/SprintJavaPorto/api/bike/${visualizarId}`,{
            method: 'PUT',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(novo)
        })
        .then(window.location = '/')
        .catch(error=> console.error(error))    
    }

    return (
        <main>
            <div className="portalclie-conteiner">
                <div className='acompanhar-vist'>
                    <h2>Editar Bikes cadastradas</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="numSerie">Número de Série da Bicicleta:</label><br />
                            <input
                                type="text"
                                id="numSerie"
                                name="numSerie"
                                value={novo.numSerie}
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
                                value={novo.anoCompra}
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
                                value={novo.cor}
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
                                value={novo.modelo}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="button-container">
                            <Link href={'/PortalCliente'}>
                                <button className="button-voltar-menu" >
                                    Voltar para o Menu
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