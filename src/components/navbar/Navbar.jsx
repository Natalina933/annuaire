"use client"
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css"
const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
        icon: faHome,
    },
    {
        id: 2,
        title: "Conseil d'Administration",
        url: "/conseil",
    },
    {
        id: 3,
        title: "Fiche",
        url: "/fiche",
    },
    {
        id: 4,
        title: "Groupements",
        url: "/groupements",
    },
    {
        id: 5,
        title: "Dashbord",
        url: "/dashboard",
    },
    {
        id: 6,
        title: "Contact",
        url: "/contact",
    },
]

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>ANOCR</Link>
            <div className={styles.links}>
                {links.map((link) => (
                    <Link key={link.id} href={link.url} className={styles.link}>
                        {link.title}
                    </Link>
                ))}
                <button
                    className={styles.logout}
                    onClick={() => {
                        console.log("logged out")
                    }}>Déconnexion</button>
            </div>
        </div>
    );
};

export default Navbar;
