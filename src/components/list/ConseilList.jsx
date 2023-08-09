import React from 'react';
import styles from './conseilList.module.css';

const ConseilList = ({ members }) => (
    <div>
        <h1 className={styles.title}>Le Bureau de l'Association</h1>
        <ul className={styles.list}>
            {members.map((person, index) => (
                <li key={index}>
                    <h3>{person.grade} {person.prenom} {person.nom}</h3>
                    <p>Groupement {person.groupement}</p>
                </li>
            ))}
        </ul>
    </div>
);

export default ConseilList;
