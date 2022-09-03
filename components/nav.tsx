


const NavBar = () => {
  return (
    <nav className="flex justify-between bg-white">
      <div className="flex">
        {/* logo */}
        <button className="flex items-center py-4 px-5 space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            classname="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillrule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              cliprule="evenodd"
            />
          </svg>
          <p className="font-bold text-lg text-[#F0B90B] ">cryptotik</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
        </button>
        {/* primary nav */}
        <div className="items-center space-x-2 py-5 hidden sm:flex">
          <div className="flex group">
            <p>Buy crypto</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <div>
              <p />
              <p />
              <p />
              <p />
            </div>
          </div>
          <a href="#">Markets</a>
          <a href="#">nft</a>
        </div>
      </div>
      {/* secondary nav */}
      <div className="items-center py-3 px-5 hidden md:flex space-x-2">
        <a href="#">log in</a>
        <button className="bg-[#E5C233] p-2 rounded">Register</button>
        <a href="#">Downloads</a>
        <a href="#">English</a>
        <a href="#">USD</a>
      </div>
      {/* mobile menu  */}
      <div className="items-center flex md:hidden py-3 px-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          0
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </nav>
  )
}

export default NavBar;