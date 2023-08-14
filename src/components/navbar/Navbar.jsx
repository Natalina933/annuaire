"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import { FaHome, FaUsers, FaListAlt, FaAddressCard, FaChartBar, FaEnvelopeOpenText } from 'react-icons/fa';
import MenuNavbar from "@/app/datas/MenuNavbar";

const iconComponents = {
    FaHome,
    FaUsers,
    FaListAlt,
    FaAddressCard,
    FaChartBar,
    FaEnvelopeOpenText
};
const Navbar = () => {
    const [deviceType, setDeviceType] = useState("desktop");

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 576) {
                setDeviceType("mobile");
            } else if (width <= 992) {
                setDeviceType("tablet");
            } else {
                setDeviceType("desktop");
            }
        };

        handleResize(); // Appel initial
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const renderLinks = () => (
        <section className={`${styles.links} ${styles[deviceType]}`}>
            {MenuNavbar.map((link) => {
                const IconComponent = iconComponents[link.icon]; // Récupère le composant d'icône correspondant
                return (
                    <Link key={link.id} href={link.url} className={styles.link}>
                        {deviceType === "desktop" ? link.title : <IconComponent />}
                    </Link>
                );
            })}
            <button
                className={styles.logout}
                onClick={() => {
                    console.log("Déconnexion effectuée");
                }}
            >
                Déconnexion
            </button>
        </section>
    );

    return (
        <nav className={`${styles.container} ${styles[deviceType]}`}>
            <Link href="/" className={styles.logo}>
                <Image src="/logo.jpg" width={35} height={35} alt="logo" />
            </Link>
            {renderLinks()}
        </nav>
    );
};

export default Navbar;