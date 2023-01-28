import React, { useState } from "react";
import ilustracao from '../../img/illustration.png';
import { FiPlay } from "react-icons/fi";
import styles from "../home/Home.module.css";
import ModalVideo from "../../componentes/ModalVideo/ModalVideo";
import './Home.css'


export default function Home() {

    const [open, setOpen] = useState(false);

    const openVideo = () => {
        setOpen(true);
    }
    const closeVideo = () => {
        setOpen(false);
    
    }

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
                    <button className='botao1' >
                        <a href={"https://www.netflix.com/br/title/60023642"} alt={'Assistir a viagem de chihiro'} target={"_blank"} rel={'noopener'}  className={'desc-bottao'}><FiPlay />ASSISTIR AGORA</a>

                    </button>

                    <button className='botao2' onClick={()=>openVideo()}>
                        <p className={'desc-bottao'}>ASSISTIR O TRAILER</p>
                    </button>
                    <ModalVideo closeVideo={closeVideo} openVideo={open}  />
                   
                    

                </div>
               
            </div>
           
            <img src={ilustracao} className={styles.fantasminha} width={"550em"} alt='Fantasminha' />

        </div>
    )

}