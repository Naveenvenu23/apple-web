import React from 'react';

const Hero = () => {
    return (
        <section className="h-[140vh]" style={{ backgroundColor: '#CAD5F8', color: 'black' }}>
            {/* Hero Top Heading */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center p-8 sm:p-16 md:p-24">
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium text-center sm:text-left">
    Get the highlights.
  </h1>
  <a href="#" className="mt-4 sm:mt-0 text-lg sm:text-xl hover:underline text-blue-500 hover:text-blue-900">
    Watch the iPhone 16 & 16plus film{' '}
    <i className="fa-solid fa-circle-play ml-2"></i>
  </a>
</div>


      {/* Horizontal Scroll Cards */}
<div className="overflow-x-auto flex whitespace-nowrap pb-8 snap-x snap-mandatory scroll-smooth text-white">
  {/* Card 1 */}
  <div className="h-[500px] lg:h-screen w-11/12 lg:w-9/12 rounded-2xl flex-shrink-0 snap-start p-4 lg:p-14 relative">
    <img
      src="/my-images.jpg/apple1.jpg"
      className="w-full h-full object-cover rounded-3xl"
      alt="Image 1"
    />
    <h1 className="absolute bottom-8 left-8 text-lg sm:text-xl md:text-2xl lg:text-3xl lg:bottom-72 lg:left-28 font-bold">
      The first iPhone designed<br />
      for Apple Intelligence.<br />
      Personal, private, powerful.
    </h1>
  </div>

  {/* Card 2 */}
  <div className="h-[500px] lg:h-screen w-11/12 lg:w-9/12 flex-shrink-0 snap-start p-4 lg:p-14  relative">
    <img
      src="/my-images.jpg/apple3.jpg"
      className="w-full h-full object-cover rounded-3xl"
      alt="Image 2"
    />
    <h1 className="absolute bottom-8 left-8 text-lg sm:text-xl md:text-2xl lg:text-3xl lg:bottom-72 lg:left-28 font-bold">
      4K 120 fps Dolby Vision.<br />
      4 studio-quality mics.<br />
      A Pro studio in your pocket.
    </h1>
  </div>

  {/* Card 3 */}
  <div className="h-[500px] lg:h-screen w-11/12 lg:w-9/12 flex-shrink-0 snap-start p-4 lg:p-14 relative">
    <img
      src="/my-images.jpg/apple4.jpg"
      className="w-full h-full object-cover rounded-3xl"
      alt="Image 3"
    />
    <h1 className="absolute bottom-8 left-8 text-lg sm:text-xl md:text-2xl lg:text-3xl lg:bottom-72 lg:left-28 font-bold">
      So fast. So fluid.<br />
      Get a feel for the all-new<br />
      Camera Control.
    </h1>
  </div>

  {/* Card 4 */}
  <div className="h-[500px] lg:h-screen w-11/12 lg:w-9/12 flex-shrink-0 snap-start p-4 lg:p-14 relative">
    <img
      src="/my-images.jpg/apple5.jpg"
      className="w-full h-full object-cover rounded-3xl"
      alt="Image 4"
    />
    <h1 className="absolute bottom-8 left-8 text-lg sm:text-xl md:text-2xl lg:text-3xl lg:bottom-72 lg:left-28 font-bold">
      A huge leap in battery life.<br />
      Game on.
    </h1>
  </div>
</div>


        </section>
    );
};

export default Hero;
