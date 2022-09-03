


const Footer = () => {
  return (
    <>

            {/* footer */}
            <div className="sm:flex-row flex-col flex justify-between px-5 text-[#877A8A]">
        <div>
          <div className="flex justify-between py-4">
            <p className="font-medium text-black"> About Us </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline sm:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <p className="hidden sm:block">
            About <br /> Careers <br /> Buisness Contacts <br /> Comunity <br />{' '}
            Binance Blog <br /> Terms <br /> Privacy <br /> Announcements <br />{' '}
            News <br /> Notices
          </p>
        </div>
        <div>
          <div className="flex justify-between py-4">
            <p className="font-medium text-black"> Products</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline sm:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <p className="hidden sm:block">
            Exchange <br /> Charity <br /> Card <br /> Labs <br /> Launchpad{' '}
            <br /> Research <br /> Trust Wallet <br /> NFT <br />{' '}
            Featured.market <br />
            Crypto payment methods
          </p>
        </div>
        <div>
          <div className="flex justify-between py-4">
            <p className="font-medium text-black"> Service</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline sm:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <p className="hidden sm:block">
            Downloads <br />
            Desktop application <br />
            Buy crypto <br />
            Instutional traning <br />
            Referral <br /> Executoin solutons <br /> Afflilate <br />
            BNB <br />
            OTC trading <br />
            Listing application <br /> P2P applications <br />
            Historical Market Data
          </p>
        </div>
        <div>
          <div className="flex justify-between py-4">
            <p className="font-medium text-black">Support</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline sm:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <p className="hidden sm:block">
            Give us feedback <br /> Support center <br /> Submit a request{' '}
            <br /> API Documentation <br /> Fees <br /> Trading rules <br />{' '}
            Binance Verify <br /> Law eEnforcement Requests
          </p>
        </div>
        <div>
          <div className="flex justify-between py-4">
            <p className="font-medium text-black">Learn</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline sm:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <p className="hidden sm:block">
            Buy BNB <br /> Buy BUSD <br /> Buy Bitcoin <br />
          </p>
        </div>
      </div>
      {/* 
const Crypto: string[] = ['ehter','bitcoin cash','ripple','Defi','SHIB',];
Crypto.map((coin) => {
  {coin} <br/>
});
     */}
      <div className=" group fixed bg-[#F6CC27] rounded-[200px] p-2 bottom-0 right-0 m-4 z-20 hover:flex hover:w-[100px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        <p className="hidden group-hover:inline">Support</p>
      </div>

    </>
  )
}

export default Footer;