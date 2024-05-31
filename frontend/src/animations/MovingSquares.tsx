import '../index.css'
const MovingSquares = () => {
  return (
    <div className="effect-2 absolute left-10 bottom-48 w-40 flex flex-wrap justify-between animate-topBounce">
      {[...Array(28)].map((_, index) => (
        <div key={index} className="h-6 w-6 bg-yellow-400 m-1"></div>
      ))}
    </div>
  );
};

export default MovingSquares;
