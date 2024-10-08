import Avatar from '@site/src/components/Avatar';


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

    <article className='column col--6 margin-top--md margin-bottom--sm row center_item'>
        <div style={{display: 'flex', alignItems: 'left'}}>
          {MemberList.map((props, idx) => (
              <Avatar key={idx} {...props} />
          ))}
        </div>
    </article>
  );
}