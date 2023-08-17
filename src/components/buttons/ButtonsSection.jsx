"use client"
import Link from "next/link";
import React from "react";
import styles from "./button.module.css"

import { AiOutlinePrinter, AiOutlineShareAlt, AiOutlineEdit } from 'react-icons/ai'; // Importez les icônes de la bibliothèque react-icons/ai

const Button = ({ url, icon }) => {
    return (
        <Link href={url}>
            <button className={styles.container}>
                {icon}
            </button>
        </Link>
    );
};

function ButtonSection() {
    return (
        <section className={styles.buttonSection}>
            <div className={styles.buttonWrapper}>
                <Button url="/" icon={<AiOutlinePrinter />} />
                <Button url="/" icon={<AiOutlineShareAlt />} />
                <Button url="/" icon={<AiOutlineEdit />} />
            </div>
        </section>
    );
}

export default ButtonSection;