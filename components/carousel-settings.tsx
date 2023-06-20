import { Carousel, Card} from './carousel';
import Image1 from '@/public/images/asset-profile-test.jpg'

const UseCarousel: React.FC = () => {
  const cards = [
    {
      asset: Image1,
      title: 'Card 1',
      subtitle: 'Vet',
      content: 'Lorem ipsum dolor sit amet...',
    },
    {
      asset: Image1,
      title: 'Card 2',
      subtitle: 'Dogtor',
      content: 'Lorem ipsum dolor sit amet...',
    },
    {
      asset: Image1,
      title: 'Card 3',
      subtitle: 'Vet',
      content: 'Lorem ipsum dolor sit amet...',
    },
    // Add more cards here
  ];

  return (
    <div className='cards-carousel my-6'>
      <Carousel>
        {cards.map((card, i) => (
          <Card
            key={i}
            asset={card.asset}
            title={card.title}
            subtitle={card.subtitle}
            content={card.content}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default UseCarousel;