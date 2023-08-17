"use client"
import React from 'react';
import styles from "./footer.module.css";
import Image from 'next/image';
import Link from 'next/link';


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
                    <h3>Email :</h3>
                    <a href="mailto:anocr@orange.fr">anocr@orange.fr</a>
                </div>
                <Link href="mailto:anocr@orange.fr" onClick={(e) => {
                    window.location.href = "mailto:anocr@orange.fr";
                    e.preventDefault();
                }}>
                    <h2>Contactez-nous</h2>
                </Link>
            </section>
        </footer>
    )
}

export default Footer;
