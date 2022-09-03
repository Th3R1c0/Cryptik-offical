


const MarketTrend = () => {
  return (
    <>
     {/* market section  */}
     <div className="flex flex-col w-full p-5 space-y-5">
     {/* header */}
     <div className="font-bold text-4xl">Market Trend</div>
     {/* market section headers */}
     <div className="flex justify-between font-bold">
       <p>Name</p>
       <div className="flex justify-between space-x-3 w-2/6">
         <p>Last price</p>
         <p>24 Hour Change</p>
       </div>
       <p>Markets</p>
     </div>
     {/* market stats */}
     <div className="flex flex-col space-y-5">
       {/* market stat section */}
       <div className="flex justify-between">
         <p>BnB CoIn</p>
         <div className="flex w-2/6 justify-between space-x-3">
           <p>$515 USD</p>
           <p className="text-red-500">+23.45%</p>
         </div>
         <div>image here</div>
       </div>
       <div className="flex justify-between">
         <p>BnB CoIn</p>
         <div className="flex w-2/6 justify-between space-x-3">
           <p>$515 USD</p>
           <p className="text-red-500">+23.45%</p>
         </div>
         <div>image here</div>
       </div>
       <div className="flex justify-between">
         <p>BnB CoIn</p>
         <div className="flex w-2/6 justify-between space-x-3">
           <p>$515 USD</p>
           <p className="text-red-500">+23.45%</p>
         </div>
         <div>image here</div>
       </div>
       {/* footer*/}
       <div className="flex justify-center">View More Markets</div>
     </div>
   </div>
   </>
  )
}

export default MarketTrend;