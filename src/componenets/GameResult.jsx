import { useContext } from "react";
import { AppContext } from "../App";

const GameResult = () => {
  const { myPoint } = useContext(AppContext);
  return (
    <div className="bg-amber-500 w-full grow flex flex-col justify-center items-center shadow-amber-300 shadow-lg">
      <img src="/images/dogeTitle.png" alt="" />
      <img className="w-28 h-28" src="/images/dogeCoin.png" alt="" />
      <div className="text-2xl font-black"> {myPoint} Doge</div>
      <div className="  w-28 h-28 flex justify-center">
        <img className="cursor-pointer" src="/images/purchase.png" alt="" />
        <img className="cursor-pointer" src="/images/send.png" alt="" />
        <img className="cursor-pointer" src="/images/swap.png" alt="" />
      </div>
    </div>
  );
};

export default GameResult;
