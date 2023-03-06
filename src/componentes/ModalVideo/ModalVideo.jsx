import React from "react";
import Modal from "react-modal";
import styleV from '../../styles/ModalVideo.module.css'

export default function VideoModal({ openVideo, closeVideo }) {


    return (

        <Modal
            className={styleV.stylesCenter}
            isOpen={openVideo}
            onRequestClose={closeVideo}
       

        >

            <iframe width="700" height="350" src="https://www.youtube.com/embed/ByXuk9QqQkk" title={"Spirited Away - Official Trailer"}  allowFullScreen></iframe>
        </Modal>

    )
   

}