"use client"
import Link from "next/link";
import '/src/app/PortalCliente/portalcliente.css'
import { useState } from 'react';

export default function Feedback() {
    
    const [nota, setNota] = useState('');
    const [comentario, setComentario] = useState('');

    const handleSubmitFeedback = (e) => {
        e.preventDefault();

        if (nota >= 0 && nota <= 10) {
            console.log("Nota válida, enviando feedback:", nota, comentario);
        } else {
            alert("A nota deve estar entre 0 e 10.");
        }
    };

    return (
        <main>
            <div className="portalclie-conteiner">
                <div className="feedback-conteiner">
                    <h2>Feedback</h2>
                    <form onSubmit={handleSubmitFeedback}>
                        <div className="form-group">
                            <label htmlFor="nota">Nota (de 0 a 10):</label><br />
                            <input
                                type="text"
                                id="nota"
                                name="nota"
                                value={nota}
                                onChange={(e) => setNota(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="comentario">Comentário:</label><br />
                            <textarea
                                id="comentario"
                                name="comentario"
                                value={comentario}
                                onChange={(e) => setComentario(e.target.value)}
                                rows="4"
                            ></textarea>
                        </div>
                        <div className="button-container">
                            <Link href={'/PortalCliente'}>
                                <button className="button-voltar-menu" >
                                    Voltar para o Menu
                                </button>
                            </Link>
                            <button type="submit">Enviar Feedback</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}