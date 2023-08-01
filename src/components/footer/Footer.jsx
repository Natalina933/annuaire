import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>
                <Image src="/logo.jpg" width={35} height={35} alt='contact' />
                <h3>ANOCR 15, rue Cler - 75007 Paris</h3>
                <h3>01 44 18 92 18</h3>
                <h4>anocr@orange.fr</h4>
            </div>
        </div>

    )
}

export default Footer