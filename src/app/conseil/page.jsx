"use client"
import React, { useRef } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/button/Button';
import ReactToPrint from 'react-to-print';
import Header from "public/image/arc.jpg";

const Conseil = ({ grade, nom, prenom, groupement }) => {
  const componentRef = useRef(null);
  const BureauData = [
    { grade: "Le Président", prenom: "Prénom1", nom: "Nom1", groupement: "Groupement1" },
    { grade: "Le Vice-président", prenom: "Prénom2", nom: "Nom2", groupement: "Groupement2" },
    { grade: "Le Trésorier", prenom: "Prénom3", nom: "Nom3", groupement: "Groupement3" },
  ];
  const BoardMembers = [
    { grade: "Le Président", prenom: "Prénom1", nom: "Nom1", groupement: "Groupement1" },
    { grade: "Le Secrétaire", prenom: "Prénom2", nom: "Nom2", groupement: "Groupement2" },
    { grade: "Le Trésorier", prenom: "Prénom3", nom: "Nom3", groupement: "Groupement3" },
  ];

  const newLocal = <section className={styles.item}>
    <h1 className={styles.title}>Les Membres du Conseil d'Administration</h1>
    <ol>
      {BoardMembers.map((member, index) => (
        <li key={index}>
          <h3>{member.grade} {member.prenom} {member.nom}</h3>
          <p>Groupement {member.groupement}</p>
        </li>
      ))}
    </ol>
  </section>;
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
        <h1 className={styles.title}>
          Le Bureau de l'Association</h1>
        <ul className={styles.list}>
          {BureauData.map((person, index) => (
            <li key={index}>
              <h3>{person.grade} {person.prenom} {person.nom}</h3>
              <p>Groupement {person.groupement}</p>
            </li>
          ))}
        </ul>
      </section>
      {newLocal}
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
