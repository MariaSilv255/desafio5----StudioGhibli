import React from "react";
import ilustracao from '../../img/illustration.png';
import { FiPlay } from "react-icons/fi";
import './Home.css'

export default function Home() {
    return (
        <div className='conteudo'>

            <div className='informacoes'>
                <h2 className='informacoes-autor'>
                    HAYAO MIYAZAKI
                </h2>

                <h1 className='informacoes-titulo'>
                    A VIAGEM DE CHIHIRO
                </h1>

                <h3 className='informacoes-descricao'>
                    Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.
                </h3>

                <div className='grupo-botoes'>
                    <button className='botao' >
                        <p className='desc-bottao'><FiPlay />ASSISTIR AGORA</p>
                    </button>

                    <button className='botao'>
                        <p className='desc-bottao'>ASSISTIR O TRAILER</p>
                    </button>

                </div>
            </div>


            <img src={ilustracao} width={500} />

        </div>
    )

}