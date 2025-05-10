import React, { useState, useEffect } from 'react';

const Header = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className='bg-blue-200 h-max'>
      <img 
        src="/my-images.jpg/iphone16.png" 
        alt="my Image" 
        className={`w-full h-auto transform transition-transform duration-1000 ease-out ${loaded ? 'scale-100' : 'scale-125'}`} 
      />
      <div className="flex flex-col items-center space-y-4 text-white" style={{ backgroundColor: '#CAD5F8' }}>
        <button className="h-14 w-32 rounded-2xl text-white bg-blue-500 hover:bg-blue-900">
          Buy
        </button>
        <p className='text-black font-bold'>From ₱54,990</p>
        <p className='text-gray-700 p-5 mt-0'>Apple Intelligence available now¹</p>
      </div>
    </div>
  );
};

export default Header;
