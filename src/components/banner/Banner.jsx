import React from 'react'
import styles from "./banner.module.css"
import Header from "public/image/arc.jpg";
import Image from 'next/image';


const Banner = () => {
    return (
        <header className={styles.banner}>
            <Image src={Header} className={styles.img} alt='Image header' />
            <div className={styles.imgText}>
                <h1>Composition du Conseil d'administration 2023-2024</h1>
                <h2>24 administrateurs élus au conseil d’administration du 16 mai 2023</h2>
            </div>
        </header>
    );
}

export default Banner;
