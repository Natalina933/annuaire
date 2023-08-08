"use client"
import React, { useRef } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/button/Button';
import ReactToPrint from 'react-to-print';
import Header from "public/image/arc.jpg";

const Conseil = ({ grade, nom, prenom, groupement }) => {
  const componentRef = useRef(null);

  return (
    <main className={styles.container}>
      <section className={styles.item} ref={componentRef}>
        <header>
          <Image src={Header} className={styles.img} alt='Image header' />
          <div className={styles.imgText}>
            <h1>Composition du Conseil d'administration 2023-2024</h1>
            <h2>24 administrateurs élus au conseil d’administration du 16 mai 2023</h2>

          </div>
        </header>
        <h1 className={styles.title}>Le Bureau de l'Association</h1>
        <ul className={styles.list}>
          <li>Le Président</li>
          <h3>{grade} {prenom} {nom}</h3>
          <p>Groupement {groupement}</p>
          <li>Les Vice-présidents</li>
          <h3>{grade} {prenom} {nom}</h3>
          <p>Groupement {groupement}</p>
          <li>Le Trésorier</li>
          <h3>{grade} {prenom} {nom}</h3>
          <p>Groupement {groupement}</p>
        </ul>
      </section>
      <section className={styles.item}>
        <h1 className={styles.title}>Les Membres du Conseil d'Administration</h1>
        <ol>
          <li>
            <h3>{grade} {prenom} {nom}</h3>
            <p>Groupement {groupement}</p>
          </li>
        </ol>
      </section>
      <section className={`${styles.button}`}>
        <ReactToPrint
          trigger={() => (
            <Button
              url="/"
              text="Imprimer/Télécharger"
            />
          )}
          content={() => componentRef.current}
        />
      </section>
    </main>
  );
};

export default Conseil;
