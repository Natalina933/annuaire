import React from 'react';
import styles from './button.module.css';

const ButtonConnex = ({ url, text, onClick }) => {
    return (
        <a href={url} className={styles.button} onClick={onClick}>

            <span className={styles.text}>{text}</span>
        </a>
    );
};

export default ButtonConnex;