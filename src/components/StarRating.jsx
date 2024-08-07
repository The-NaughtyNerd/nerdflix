import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const colors = {
    gold: '#ffcb00',
    grey: '#a9a9a9',
  };

  const stars = Array(5).fill(0);

  return (
    <div className="text-[1.2rem] flex items-center">
      <p className="mr-4">{rating}</p>
      {stars.map((_, index) => {
        return (
          <FaStar
            key={index}
            color={rating / 2 > index ? colors.gold : colors.grey}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
