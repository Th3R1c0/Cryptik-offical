import React from 'react';

const Navigation = () => {
  return (
    <>
            {/* slide in navigation */}
      <div className=" flex flex-col w-screen hidden absolute z-10 top-0 bg-white h-screen">
        {/* remove the "hidden" class attribute to see the slide in navigation */}
        {/* exit button section */}
        <div className=" flex justify-end mx-5 my-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        {/* top section */}
        <div className=" flex flex-col text-center space-y-4 px-5 mb-5">
          <a href="#">log in</a>
          <button className=" bg-[#E5C233] p-2 rounded ">Register</button>
        </div>
        {/* links */}
        <div className>
           {' '}
          {/* links container */}
          {/* primary nav */}
          <div className="  sm:hidden flex flex-col">
            <a href="#" className=" flex space-x-2 py-3 hover:bg-gray-200 pl-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <p>Buy crypto</p>
            </a>
            <a href="#" className=" flex space-x-2 py-3 hover:bg-gray-200 pl-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              <p>Markets</p>
            </a>
            <a href="#" className=" flex space-x-2 py-3 hover:bg-gray-200 pl-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p>nft</p>
            </a>
          </div>
          <div className=" sm:hidden flex flex-col ">
            <a href="#" className=" flex space-x-2 py-3 hover:bg-gray-200 pl-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <p> Downloads</p>
            </a>
            <a href="#" className=" flex space-x-2 py-3 hover:bg-gray-200 pl-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <p>English</p>
            </a>
            <a href="#" className=" flex space-x-2 py-3 hover:bg-gray-200 pl-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clipRule="evenodd"
                />
              </svg>
              <p>USD</p>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

const T = () => {
  return (
    <div
  className=" h-[480px] bg-[#191B21] flex flex-col justify-around w-screen border-green-700 border-2 ">

    {/* top part */}{' '}
      <div className=" space-y-10 lg:px-20 px-5">
      <div className=" text-white flex flex-col space-y-5 whitespace-nowrap">
        <h1 className=" font-bold text-3xl md:text-5xl">
          Buy and sell crypto{' '}
          <p className=" hidden sm:inline-block"> in minutes</p>
        </h1>
        <p className=" text-md">join the worlds largest crypto exchange</p>
        <button className=" bg-[#E5C233] p-2  rounded  h-full  text-black">
          Register
        </button>
      </div>
      {/* slides */}
      <div className=" flex w-full h-[150px] space-x-4 ">
        {/* will implement a sliding libary for a slideshow of slides when in
        mobile and tablet view */}
        <a href="#" className=" lg:w-[20%]  sm:w-1/2 w-full">
          <div
            className=" h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-md"
          ></div>
        </a>
        <a href="#" className=" lg:w-[20%] sm:w-1/2">
          <div
            className=" h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-md"
          ></div>
        </a>
        <a href="#" className=" w-[20%] hidden lg:block ">
          <div
            className=" h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-md"
          ></div>
        </a>
        <a href="#" className=" w-[20%] hidden lg:block ">
          <div
            className=" h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-md"
          ></div>
        </a>
        <a href="#" className=" w-[20%] hidden lg:block ">
          <div
            className=" h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-md"
          ></div>
        </a>
      </div>
     </div>
    </div>  
  )
}




const MainSection = () => {
  return (
    <div>

{/* home page */}
<T />
{/* slide container */}
{/* announcements */}
<div className=" flex flex-col px-5 py-5">
  <div>
    special notice about binance nfts and the marketplace{' '}
    <a className=" text-yellow-500" href="#">
      More
    </a>
  </div>
  <div>
    Special christmass sale on NFTs{' '}
    <a className=" text-yellow-500" href="#">
      More
    </a>
  </div>
</div>
      
    </div>
  );
};

export default MainSection;
