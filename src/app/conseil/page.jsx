"use client"
import React, { useRef } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/button/Button';
import ReactToPrint from 'react-to-print';
import Header from "public/image/arc.jpeg";

const Conseil = ({ grade, nom, prenom, groupement }) => {
  const componentRef = useRef(null);

  return (
    <div className={styles.container}>
      <div className={styles.item} ref={componentRef}>
        <header>
          <Image src={Header} className={styles.img} alt='Image header'  />

        </header>
        <h1 className={styles.title}>Le Bureau de l'Association</h1>
        <ol className={styles.list}>
          <li>Le Président</li>
          <h3>{grade} {prenom} {nom}</h3>
          <p>Groupement {groupement}</p>
          <li>Les Vice-présidents</li>
          <h3>{grade} {prenom} {nom}</h3>
          <p>Groupement {groupement}</p>
          <li>Le Trésorier</li>
          <h3>{grade} {prenom} {nom}</h3>
          <p>Groupement {groupement}</p>
        </ol>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Les Membres du Conseil d'Administration</h1>
        <ol>
          <li>
            <h3>{grade} {prenom} {nom}</h3>
            <p>Groupement {groupement}</p>
          </li>
        </ol>
        <div>
          <ReactToPrint
            trigger={() => <Button
              url="/"
              text="Imprimer/Télécharger"
            />}
            content={() => componentRef.current}
          />

        </div>
      </div>
    </div>
  );
};

export default Conseil;
