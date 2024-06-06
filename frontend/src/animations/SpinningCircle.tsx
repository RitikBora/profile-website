import '../index.css'

const SpinningCircle = () => {
  return (
    <div className="effect effect-5 absolute">
      {[...Array(10)].map((_, index) => (
        <div key={index} className=""></div>
      ))}
    </div>
  );
};

export default SpinningCircle;