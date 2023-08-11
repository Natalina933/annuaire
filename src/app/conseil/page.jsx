"use client"
import React, { useRef } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/button/Button';
import ReactToPrint from 'react-to-print';
import Header from "public/image/arc.jpg";
import ConseilList from '@/components/list/ConseilList';


const Conseil = () => {
  const componentRef = useRef(null);

  const BureauData = [
    { poste: "Le Président", grade: "Vice-Amiral", prenom: "Michel", nom: "OLHAGARAY", groupement: "Groupement1" },
    { poste: "Le Vice-président", grade: "Grade", prenom: "Prénom2", nom: "Nom2", groupement: "Groupement2" },
    { poste: "Le Vice-président", grade: "Grade", prenom: "Prénom2", nom: "Nom2", groupement: "Groupement2" },
    { poste: "Le Vice-président", grade: "Grade", prenom: "Prénom2", nom: "Nom2", groupement: "Groupement2" },
    { poste: "Le Vice-président", grade: "Grade", prenom: "Prénom2", nom: "Nom2", groupement: "Groupement2" },
    { poste: "Le Trésorier", grade: "Le Trésorier", prenom: "Prénom3", nom: "Nom3", groupement: "Groupement3" },



  ];

  const BoardMembers = [
    { poste: "Le Président", grade: "Grade", prenom: "Prénom1", nom: "Nom1", groupement: "Groupement1" },
    { poste: "Le Secrétaire", grade: "Grade", prenom: "Prénom2", nom: "Nom2", groupement: "Groupement2" },
    { poste: "Le Trésorier", grade: "Grade", prenom: "Prénom3", nom: "Nom3", groupement: "Groupement3" },
  ];

  return (
    <main className={styles.container} ref={componentRef}>
      <header>
        <Image src={Header} className={styles.img} alt='Image header' />
        <div className={styles.imgText}>
          <h1>Composition du Conseil d'administration 2023-2024</h1>
          <h2>24 administrateurs élus au conseil d’administration du 16 mai 2023</h2>
        </div>
      </header>
      <ConseilList members={BureauData} />

      <ConseilList members={BoardMembers} />

      <section className={styles.button}>
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
