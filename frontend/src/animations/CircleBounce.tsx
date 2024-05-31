import React from 'react';

const CircleBounce = () => {
  return (
      <div className='relative'>
        <div 
        className="absolute -top-52 right-96 border-8 border-solid border-skin-color rounded-full  animate-leftBounce"
        style={{ borderColor: '#f0f', borderWidth: '25px' , height: "12.5rem" , width : "12.5rem"}} 
      ></div>
      </div>
  );
};

export default CircleBounce;
