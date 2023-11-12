import Link from 'next/link'
import './pagehome.css'
import Carrossel from '../components/Carrossel'

export default function Home() {
  const images = [
    '/Image/feedback_clienteana.png',
    '/Image/feedback_clientenoah.png',
    '/Image/feedback_clienteestela.png',
  ];
  return (
    <main>
      <div className="home-conteiner">
        <section className='inicio-home'>
          <div className="destaq-inicio">
            <div className="frase-destaq">
              <h1>Sua Vistoria</h1>
              <h2>Online Aqui!</h2>
            </div>
            <div className="btn-saibamais">
              <Link href={'/ComoFunciona'}>
                <span><button>Saiba Mais</button></span>
              </Link>
            </div>
          </div>
          <div className="destaq-bicle">
            <div className="quadrad-home">

            </div>
            <img src="/Image/img_homedestaq.png" alt="Homem na Bicicleta" />
          </div>
        </section>

        <section className="feedbackclie-destaq">
          <h2>FeedBack de Destaques</h2><br />
          <p>Aqui estão alguns dos comentários e feedbacks de nossos clientes satisfeitos:</p><br />
          <Carrossel imagens={images} />
        </section>
      </div>
    </main>
  )
}
