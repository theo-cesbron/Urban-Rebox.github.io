import styles from './index.module.css';
import AvatarSVG from '../AvatarSVG';

export default function Avatar({ name, role, profil_icon }) {
    return (
        <article className={styles.main}>
            <picture className={styles.photo}>
                <img
                    srcset={profil_icon} />
                <AvatarSVG/>
            </picture>
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