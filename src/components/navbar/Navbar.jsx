"use client"

import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { FaHome, FaAddressCard, FaUsers, FaListAlt, FaChartBar, FaEnvelopeOpenText } from "react-icons/fa";

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
        icon: <FaHome />,
    },
    {
        id: 2,
        title: "Conseil d'Administration",
        url: "/conseil",
        icon: <FaUsers />,

    },
    {
        id: 3,
        title: "Fiche",
        url: "/fiche",
        icon: <FaAddressCard />,

    },
    {
        id: 4,
        title: "Groupements",
        url: "/groupements",
        icon: <FaListAlt />,

    },
    {
        id: 5,
        title: "Dashbord",
        url: "/dashboard",
        icon: <FaChartBar />,

    },
    {
        id: 6,
        title: "Contact",
        url: "/FaEnvelopeOpenText",
        icon: <FaEnvelopeOpenText />

    },
];
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

    return (
        <nav className={`${styles.container} ${styles[deviceType]}`}>
            <Link href="/" className={styles.logo}>
                ANOCR
            </Link>
            <section className={`${styles.links} ${styles[deviceType]}`}>
                {links.map((link) => (
                    <Link key={link.id} href={link.url} className={styles.link}>
                        {deviceType === "desktop" ? link.title : link.icon}
                    </Link>
                ))}
                <button
                    className={styles.logout}
                    onClick={() => {
                        console.log("Déconnexion effectuée");
                    }}
                >
                    Déconnexion
                </button>
            </section>
        </nav>
    );
};

export default Navbar;