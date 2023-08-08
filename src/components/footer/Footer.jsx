import React from 'react';
import styles from "./footer.module.css";
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className={styles.container}>
            <section className={styles.logoContainer}>
                <Image src="/logo.jpg" width={35} height={35} alt='contact' />
                <h3 className={styles.logoText}>ANOCR</h3>
            </section>

            <section className={styles.contactInfo}>
                <address>
                    <h3>Adresse :</h3>
                    <p>15, rue Cler - 75007 Paris</p>
                </address>
                <div>
                    <h3>Téléphone :</h3>
                    <p>01 44 18 92 18</p>
                </div>
                <div>
                    <h3>Email :</h3>
                    <a href="mailto:anocr@orange.fr">anocr@orange.fr</a>
                </div>
            </section>
        </footer>
    )
}

export default Footer;
