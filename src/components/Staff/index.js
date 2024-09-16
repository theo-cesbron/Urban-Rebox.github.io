import Avatar from '@site/src/components/Avatar';


const MemberList = [
    {
      name: "Test",
      role: "Community manager",
      profil_icon: "/img/logo.png"
    },
    {
        name: "Test2",
        role: "Community manager",
        profil_icon: "/img/logo.png"
      },
  ];


export default function Staff() {

  return (

    <article className='column col--12 margin-top--md margin-bottom--sm row center_item'>
        {MemberList.map((props, idx) => (
            <Avatar key={idx} {...props} />
        ))}
    </article>
  );
}