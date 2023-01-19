import React from "react";
import { FiFacebook, FiYoutube, FiTwitter, FiInstagram } from "react-icons/fi";
import styles from './Header.modules.css';

export default function Header() {
    return (
        <nav className={styles.navpage}>
            <p>LOGOTIPO</p>
            <div>
                <FiFacebook />
                <FiInstagram />
                <FiTwitter />
                <FiYoutube />
            </div>
        </nav>
    );
}