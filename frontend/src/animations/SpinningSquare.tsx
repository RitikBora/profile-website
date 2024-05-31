import '../index.css';

const SpinningSquare = () => {
  return (
    <div 
      className="absolute w-[35px] h-[35px] border-4 border-purple-600 right-[10%] bottom-[10%]" 
      style={{ animation: 'spin 10s linear infinite' }}
    ></div>
  );
};

export default SpinningSquare;
