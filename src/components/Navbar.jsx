import React, { useRef, useState } from 'react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [images, setImages] = useState([
    'internimg.jpg',
    'internimg.jpg',
    'internimg.jpg',
  ]);
  const scrollContainerRef = useRef(null);

  // Function to add a new image
  const addImage = () => {
    const newImage = 'internimg.jpg'; 
    setImages([...images, newImage]);
  };

  // Function to handle scrolling left
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -100, // Adjust the scroll amount as needed
        behavior: 'smooth',
      });
    }
  };

  // Function to handle scrolling right
  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 100, // Adjust the scroll amount as needed
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex flex-col w-[40%] p-6 bg-gray-800 rounded-[30px] text-white">
      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        <button
          className={`flex-1 py-2 rounded-[20px] ${
            activeTab === 'about' ? 'bg-gray-700' : 'bg-gray-600'
          }`}
          onClick={() => setActiveTab('about')}
        >
          About Me
        </button>
        <button
          className={`flex-1 py-2 rounded-[20px] ${
            activeTab === 'experiences' ? 'bg-gray-700' : 'bg-gray-600'
          }`}
          onClick={() => setActiveTab('experiences')}
        >
          Experiences
        </button>
        <button
          className={`flex-1 py-2 rounded-[20px] ${
            activeTab === 'recommended' ? 'bg-gray-700' : 'bg-gray-600'
          }`}
          onClick={() => setActiveTab('recommended')}
        >
          Recommended
        </button>
      </div>

      {/* About Me Section */}
      <div className="p-4 rounded mb-4 h-36 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded text-gray-300">
        <p>
          Hello! I'm Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years
          now. <br /> <br />I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife
          Tiffany and my 4-year-old twin daughters – Emma and Ella. Both of them are just starting school, so my
          calendar is usually blocked between 9–10 AM. This is a typical text that will appear on all tabs regardless of
          which one is selected.
        </p>
      </div>

      {/* Horizontal Break */}
      <hr className="border-gray-600 my-4" />

      {/* Gallery Section */}
      <div className="mt-4 flex flex-col">
        <button className="py-4 bg-black rounded-[20px] px-4 text-white w-[20%] mb-4">
          Gallery
        </button>
        <div className="flex items-center justify-end gap-4 mb-2">
          <button
            className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
            onClick={addImage}
          >
            + Add Image
          </button>
          <div className="flex gap-2">
            <button
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-600 transition-transform transform hover:scale-110 duration-200"
              onClick={handleScrollLeft}
            >
              &larr;
            </button>
            <button
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-600 transition-transform transform hover:scale-110 duration-200"
              onClick={handleScrollRight}
            >
              &rarr;
            </button>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className="flex gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-rounded"
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-24 h-24 rounded-[25px] transition-transform transform hover:scale-105 hover:rotate-3 hover:shadow-lg hover:shadow-gray-800 duration-300 ease-in-out"
            />
          ))}
        </div>
      </div>

      {/* Horizontal Break */}
      <hr className="border-gray-600 my-4" />
    </div>
  );
};

export default Navbar;
