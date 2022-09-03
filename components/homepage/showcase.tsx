


const ShowCase = () => {
  return (
    <> 
     {/* showcase */}
     <div className="sm:h-[600px] p-5 flex flex-col w-full space-y-5">
        {/* header */}
        <div className="space-y-3">
          <p className="font-bold text-4xl">Trade. Anywhere.</p>
          <p className="text-[#4D4D57]">
            compatitable with multiple platforms, start trading with safety and
            confidence on our platform
          </p>
        </div>
        {/* section photos */}
        <div className="flex flex-col sm:flex-row h-full">
          <div className="bg-red-400 sm:w-1/2 sm:h-full h-[300px]">
            {' '}
            photo one{' '}
          </div>
          <div className="flex flex-col sm:w-1/2">
            <div className="sm:h-2/6 h-[200px] bg-red-500">
              {' '}
              scan to download photo
            </div>
            <div className="sm:h-4/6 h-[200px] bg-red-800">
              {' '}
              platform icons that app is avaliable on
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default ShowCase;