import React from 'react';
import styles from './index.scss';

export default function Header(){
    const a: string = "faf";
    return (
        <section>
            <header className={styles.root}>{a + 4}
                <h1 className={styles.test}>test</h1>
            </header>
                <div className={styles.test}>
                    fafa
                </div>
        </section>
    )
}
