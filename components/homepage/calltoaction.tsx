


const CallToAction = () => {
  return (
    <>
    {/* call to action section */}
    <div className="px-5 flex flex-col items-center justify-center py-10">
    <p className="font-bold text-3xl mb-5 whitespace-nowrap">
      Start trading now
    </p>
    <div className="flex sm:flex-row flex-col sm:space-x-5 sm:space-y-0 space-y-5 text-2xl">
      <button className="bg-[#E5C233] px-10 py-2  rounded">Register</button>
      <button className="bg-gray-400  px-10 py-2  rounded">
        Trade Now
      </button>
    </div>
  </div>
  </>
  )
}

export default CallToAction;