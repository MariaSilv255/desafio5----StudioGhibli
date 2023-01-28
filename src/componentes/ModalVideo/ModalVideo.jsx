import React from "react";
import Modal from "react-modal";
import styleV from '../ModalVideo/ModalVideo.module.css'

export default function VideoModal({ openVideo, closeVideo }) {


    return (

        <Modal
            className={styleV.stylesCenter}
            isOpen={openVideo}
            onRequestClose={closeVideo}
       

        >

            <iframe width="700" height="350" src="https://www.youtube.com/embed/ByXuk9QqQkk" title="Spirited Away - Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal>

    )
}