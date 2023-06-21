import { Card} from './team';
import Team_Luis from '@/public/images/assetTeamLuis.jpg';
import Team_Arturo from '@/public/images/assetTeamArturo.jpg';
import Team_Esteban from '@/public/images/assetTeamEsteban.jpg';
import Team_Danna from '@/public/images/assetTeamDanna.jpeg';
import Team_Paul from '@/public/images/assetTeamPaul.jpeg';
import Team_Sebastian from '@/public/images/assetTeamSebastian.jpg';

const UseTeamCard: React.FC = () => {
  const cards = [
    {
      asset: Team_Luis,
      name: 'Luis Cabral',
      content: 'Backend Developer',
      linkedin: 'https://www.linkedin.com/in/luis-fernando-cabral-b13847220/',
    },
    {
      asset: Team_Arturo,
      name: 'Arturo Claudio',
      content: 'Fullstack Developer',
      linkedin: 'https://www.linkedin.com/in/sweng1josearturocb/',
    },
    {
      asset: Team_Esteban,
      name: 'Esteban Pereda',
      content: 'Frontend Developer',
      linkedin: 'https://www.linkedin.com/in/esteban-pereda-soria-78396621b/',
    },
    {
      asset: Team_Danna,
      name: 'Danna Ramos',
      content: 'UX/UI Designer',
      linkedin: 'https://www.linkedin.com/in/danna-ramos',
    },
    {
      asset: Team_Paul,
      name: 'Paul Vega',
      content: 'Fullstack Developer',
      linkedin: 'https://www.linkedin.com/in/is-paulvega/',
    },
    {
      asset: Team_Sebastian,
      name: 'Sebastián Ramírez',
      content: 'Project Manager',
      linkedin: 'https://www.linkedin.com/in/sebasti%C3%A1n-ram%C3%ADrez-salas-505962251/',
    },
    // Add more cards here
  ];

  return (
    <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
        {cards.map((card, i) => (
            <Card
                key={i}
                asset={card.asset}
                name={card.name}
                content={card.content}
                linkedin={card.linkedin}
            />
        ))}
    </div>
  );
};

export default UseTeamCard;