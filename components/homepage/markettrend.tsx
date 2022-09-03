import { useEffect, useState } from 'react';

interface coin {
  time: number; // time
  symbol: string; // symbol
  buy: string; // bestAsk
  sell: string; // bestBid
  changeRate: string; // 24h change rate
  changePrice: string; // 24h change price
  high: string; // 24h highest price
  low: string; // 24h lowest price
  vol: string; // 24h volume，the aggregated trading volume in BTC
  volValue: string; // 24h total, the trading volume in quote currency of last 24 hours
  last: string; // last price
  averagePrice: string; // 24h average transaction price yesterday
  takerFeeRate: string; // Basic Taker Fee
  makerFeeRate: string; // Basic Maker Fee
  takerCoefficient: string; // Taker Fee Coefficient
  makerCoefficient: string;
}

const MarketTrend = () => {
  const [cryptoPrices, setCryptoPrices] = useState<coin | undefined>();
  useEffect(() => {
    fetch('api/v1/market/stats?symbol=BTC-USDT')
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      );
  });
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
          {/* footer*/}
          <div className="flex justify-center">View More Markets</div>
        </div>
      </div>
    </>
  );
};

export default MarketTrend;
