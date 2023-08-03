import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.jpg'

export default function Home() {
  return (
<div>
  <div className={styles.texts}>
<h1>Annuaire des groupements de l'Association Nationale des Offiers de Carrière en retraite</h1>
  </div>
  <div className={styles.imgContainer}>
    
    </div>
  <Image src={Hero} alt='image contact'/>
</div>
  )
}
