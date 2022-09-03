



const Contact = () => {
  return (
    <>
      {/* contact section */}
      <div className="p-5 space-y-4">
        <p className="font-bold text-3xl md:text-5xl">
          Get in touch. Stay in touch
        </p>
        {/* card container */}
        <div className="flex sm:flex-row flex-col space-y-3 sm:space-y-0 sm:space-x-2">
          {/* card */}
          <div className="flex flex-col sm:w-1/4 space-y-3 h-full">
            <div className="h-[100px] bg-gradient-to-r from-purple-500 to-white rounded-t-lg">
              image goes here
            </div>
            <p className="font-bold text-xl">24/7 Support</p>
            <p className="text-[#4D4D57]">
              Got a problem? Just get in rouch. Our support team is avaliable
              24/7
            </p>
          </div>
          <div className="flex flex-col sm:w-1/4 space-y-3 h-full">
            <div className="h-[100px] bg-gradient-to-r from-purple-500 to-white rounded-t-lg">
              image goes here
            </div>
            <p className="font-bold text-xl">CryptoTik Blog</p>
            <p className="text-[#4D4D57]">
              Latest analysis, reviews and reccomendations from our experts
            </p>
          </div>
          <div className="flex flex-col sm:w-1/4 space-y-3 h-full">
            <div className="h-[100px] bg-gradient-to-r from-purple-500 to-white rounded-t-lg">
              image goes here
            </div>
            <p className="font-bold text-xl">Community</p>
            <p className="text-[#4D4D57]">
              Join Crypto Discord and connect with our social media{' '}
            </p>
          </div>
          <div className="flex flex-col sm:w-1/4 space-y-3 h-full">
            <div className="h-[100px] bg-gradient-to-r from-purple-500 to-white rounded-t-lg">
              image goes here
            </div>
            <p className="font-bold text-xl">Careers</p>
            <p className="text-[#4D4D57]">
              Help build the next generation of smart decentrallized finance.
              Apply now.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;