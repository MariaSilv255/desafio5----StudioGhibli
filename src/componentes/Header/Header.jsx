import React from "react";
import { FiFacebook, FiYoutube, FiTwitter, FiInstagram } from "react-icons/fi";
import styles from "../../styles/Header.module.css";
import logo from "../../img/logo.svg";
export default function Header() {
    return (
        <nav className={styles.menu}>
            <img src={logo} />
            <div className={styles.icon}>
                <FiFacebook size={'22px'} />
                <FiInstagram size={'22px'} />
                <FiTwitter size={'22px'}/>
                <FiYoutube size={'22px'}/>
            </div>
        </nav>
    );
}