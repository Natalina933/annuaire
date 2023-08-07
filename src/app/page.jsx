import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.jpg'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Annuaire des groupements de l'Association Nationale des Officiers de Carrière en retraite - ANOCR</h1>
        <p className={styles.desc}>Membres des bureaux régionaux</p>
        <Button url="logs" text="Se connecter"/>
      </div>

      <div className={styles.item}>
        <div className={styles.imgContainer}>
          <Image src={Hero} className={styles.img} alt='Image contact' layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  )
}
