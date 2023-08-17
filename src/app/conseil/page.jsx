"use client"
import React, { useRef } from 'react';
import styles from './page.module.css';
import Button from '@/components/buttons/ButtonSection/ButtonsSection';
import ReactToPrint from 'react-to-print';
import ConseilList from '@/components/list/ConseilList';
import BureauData from "../datas/ListBureau.json";
import MembersData from '../datas/ListMembers.json';
import Banner from '@/components/banner/Banner';
import { AiOutlinePrinter } from 'react-icons/ai';

const Conseil = () => {
  const componentRef = useRef(null);

  return (
    <main className={styles.container} ref={componentRef}>
      <Banner />
      <section className={styles.button}>
        <ReactToPrint
          trigger={() => (
            <Button url="/">
              <AiOutlinePrinter className={styles.printIcon} />
            </Button>
          )}
          content={() => componentRef.current}
        />
      </section>
      <ConseilList title="Le Bureau du Conseil" members={BureauData} />

      <ConseilList title="Les Membres du Conseil" members={MembersData} />


    </main>
  );
};

export default Conseil;
