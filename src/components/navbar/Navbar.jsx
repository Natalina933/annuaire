"use client"
import Link from "next/link";
import React from "react";

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
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
        <div>
            <Link href="/">ANOCR</Link>
            <div>
                {links.map((link) => (
                    <Link key={link.id} href={link.url}>
                        {link.title}
                    </Link>
                ))}
                <button
                    onClick={() => {
                        console.log("logged out")
                    }}>Déconnexion</button>
            </div>
        </div>
    );
};

export default Navbar;
