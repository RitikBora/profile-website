import '../index.css';

const MovingSquares = () => {
  return (
    <div className="effect-2 absolute left-28 bottom-44   grid grid-cols-4 animate-topBounce">
      {[...Array(48)].map((_, index) => (
        <div key={index} className='bg-orange-800 '></div>
      ))}
    </div>
  );
};

export default MovingSquares;
