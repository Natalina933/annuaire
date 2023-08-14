import React from 'react';
import styles from './conseilList.module.css';

function ConseilList({ members, title }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <ul className={styles.list}>
                {members.map((person, index) => (
                    <li key={index} className={styles.listItem}>
                        <h3 className={styles.personName}>
                            {person.grade} {person.prenom} {person.nom}
                        </h3>
                        <p className={styles.personDetails}>
                            {person.poste} - Groupement {person.groupement}
                        </p>
                    </li>
                ))}
            </ul>
            
        </div>
    );
}

export default ConseilList;
