import React from "react";
import GameBoard from "../componenets/GameBoard";
import GameResult from "../componenets/GameResult";
import { Link } from "react-router-dom";

const main = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <GameResult />
      <div
        className="bg-amber-500 py-4 w-full grow flex flex-col justify-center items-center shadow-amber-300 shadow-lg "
        style={{ marginBottom: "900px" }}
      >
        <div className="flex justify-center items-center">
          <Link to="/purchase">
            <img
              className="cursor-pointer w-24 h-24"
              src="/images/purchase.png"
              alt=""
            />
          </Link>
          <Link to="/send">
            <img
              className="cursor-pointer w-24 h-24"
              src="/images/send.png"
              alt=""
            />
          </Link>
          <Link to="/swap">
            <img
              className="cursor-pointer w-24 h-24"
              src="/images/swap.png"
              alt=""
            />
          </Link>
        </div>
      </div>
      <GameBoard />
    </div>
  );
};

export default main;
