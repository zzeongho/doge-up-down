import { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../App";

const DiceGame = () => {
  const diceImageRef = useRef(null);
  const [point, setPoint] = useState(1);
  const [randomNum, setRandomNum] = useState(getRandomNum());
  const [text, setText] = useState(
    "주사위를 굴리고 합을 맞춰 'DOGE' 를 모아보세요!"
  );

  const { myPoint, setMyPoint } = useContext(AppContext);
  function getRandomNum() {
    return Math.floor(Math.random() * 11) + 2;
  }

  const rollDice = () => {
    setRandomNum(getRandomNum());
    diceImageRef.current.classList.add("rolling");
    setTimeout(() => {
      diceImageRef.current.classList.remove("rolling");
    }, 1000);
  };

  const checkAnswer = (guess) => {
    if (guess === randomNum) {
      if (randomNum === 7) {
        localStorage.setItem("point", parseInt(myPoint) + 7);
        setMyPoint(localStorage.getItem("point"));
        setText("WOW LUCK 777 !!");
        setTimeout(() => {
          setText("주사위를 굴리고 합을 맞춰 도지를 모아보세요!");
        }, 3000);
        setRandomNum(getRandomNum());
      } else {
        localStorage.setItem("point", parseInt(myPoint) + point);
        setMyPoint(localStorage.getItem("point"));
        setPoint(1);
        setRandomNum(getRandomNum());
        setText("정답입니다! 축하합니다!");
        setTimeout(() => {
          setText("주사위를 굴리고 합을 맞춰 도지를 모아보세요!");
        }, 3000);
      }
    } else {
      setText("ㅠㅠㅠ틀렸습니다!");
      setTimeout(() => {
        setText("YOU CAN DO IT!!");
      }, 3000);
    }
  };
  useEffect(() => console.log(`랜덤 숫자는 ${randomNum}입니다.`), [randomNum]);

  return (
    <div className="w-full mt-12 grow flex flex-col justify-center items-center ">
      <div className="mb-24 text-2xl font-bold">{text}</div>
      <div className="flex justify-center mb-4">
        <img
          src="images/dice.png"
          alt="dice"
          ref={diceImageRef}
          className="dice-image"
        />
        <button
          className="px-4 py-2 mr-4 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          onClick={rollDice}
        >
          굴려 굴려!
        </button>
        <button
          className="px-4 py-2 text-white bg-pink-500 rounded-lg shadow-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50"
          onClick={() => checkAnswer(2)}
        >
          2
        </button>
        <button
          className="px-4 py-2 text-white bg-pink-500 rounded-lg shadow-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50"
          onClick={() => checkAnswer(3)}
        >
          3
        </button>
        <button
          className="px-4 py-2 text-white bg-pink-500 rounded-lg shadow-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50"
          onClick={() => checkAnswer(4)}
        >
          4
        </button>
        <button
          className="px-4 py-2 text-white bg-pink-500 rounded-lg shadow-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50"
          onClick={() => checkAnswer(5)}
        >
          5
        </button>
        <button
          className="px-4 py-2 text-white bg-pink-500 rounded-lg shadow-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50"
          onClick={() => checkAnswer(6)}
        >
          6
        </button>
        <button
          className="px-4 py-2 text-white bg-pink-500 rounded-lg shadow-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50"
          onClick={() => checkAnswer(7)}
        >
          7 (Bonus)
        </button>
        <button
          className="px-4 py-2 text-white bg-pink-500 rounded-lg shadow-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50"
          onClick={() => checkAnswer(8)}
        >
          8
        </button>
        <button
          className="px-4 py-2 text-white bg-pink-500 rounded-lg shadow-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50"
          onClick={() => checkAnswer(9)}
        >
          9
        </button>
        <button
          className="px-4 py-2 text-white bg-pink-500 rounded-lg shadow-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50"
          onClick={() => checkAnswer(10)}
        >
          10
        </button>
        <button
          className="px-4 py-2 text-white bg-pink-500 rounded-lg shadow-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50"
          onClick={() => checkAnswer(11)}
        >
          11
        </button>
        <button
          className="px-4 py-2 text-white bg-pink-500 rounded-lg shadow-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50"
          onClick={() => checkAnswer(12)}
        >
          12
        </button>
      </div>
    </div>
  );
};

export default DiceGame;
