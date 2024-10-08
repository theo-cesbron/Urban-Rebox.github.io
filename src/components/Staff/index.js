import Avatar from '@site/src/components/Avatar';
import styles from './index.module.css';

const MemberList = [
    {
      name: "Théo Cesbron",
      role: "Chef de projet",
      profil_icon: "/img/members/theo.jpg"
    },
    {
      name: "Sophie Raquin",
      role: "Résponsable sociétale de l'entreprise",
      profil_icon: "/img/members/sophie.jpg"
    },
    {
      name: "Quentin Horgues",
      role: "Résponsable communication",
      profil_icon: "/img/members/quentin.jpg"
    },
    {
      name: "Dario Weinberger",
      role: "Résponsable communication",
      profil_icon: "/img/members/dario.jpg" 
    }
  ];


export default function Staff() {

  return (

    <article className=''>
        <section className={styles.boxAvatar}>
          {MemberList.map((props, idx) => (
              <Avatar key={idx} {...props} />
          ))}
        </section>
    </article>
  );
}