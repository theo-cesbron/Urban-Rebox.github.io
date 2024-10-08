import clsx from 'clsx';
import styles from './index.module.css';

export default function Avatar({ name, role, profil_icon }) {
    return (
        <article className={styles.main}>
            <img className={styles.photo}
                src={profil_icon}
                alt={name} />
            <div className={styles.text}>
                <div className={styles.nameBox}>
                        <span className={styles.name}>{name}</span>
                </div>
                <small
                    className={styles.role}
                    title={role}>{role}
                </small>
            </div>
        </article>
    );
}