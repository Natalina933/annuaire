import Image from 'next/image';
import styles from './page.module.css';
import Hero from 'public/hero.jpg';
import ButtonConnex from '@/components/buttons/ButtonConnex/ButtonConnex';

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.item}>
        <div className={styles.imgContainer}>
          <Image src={Hero} className={styles.img} alt='Membres ANOCR' layout="fill" objectFit="cover" />
        </div>
      </section> <section className={styles.item}>
        <h1 className={styles.title}>Annuaire des groupements de l'Association Nationale des Officiers de Carrière en retraite - ANOCR</h1>
        <p className={styles.desc}>Découvrez les membres des bureaux régionaux de l'ANOCR</p>
        <ButtonConnex url="logs" text="Se connecter" />
      </section>


    </main>
  );
}
