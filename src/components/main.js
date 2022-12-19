import React, { useState, useEffect } from "react";
import ScoreBar from "./scoreBar";
import homelessDatabase from "./registerHomeless";
import { shuffleArray, isContainCups } from "./utils";

const Main = () => {
  const [homeless, setHomeless] = useState(homelessDatabase);
  const [score, setScore] = useState({ actuall: 0, highest: 0 });
  const [cardDatabase, setCardDatabase] = useState([]);

  useEffect(() => {
    if (cardDatabase.length > 0) {
      move();
    }
  }, [cardDatabase]);

  const playAudio = (e) => {
    const id = e.target.dataset.indexNumber;
    const result = homeless.filter(
      (objectHomeless) => objectHomeless.id === id
    );
    const audio = new Audio(result[0].sound);
    audio.play();
  };
  const shuffleStateHomeless = () => {
    const shuffleHomeless = shuffleArray(homeless);
    setHomeless(shuffleHomeless);
  };
  const addPoint = () => {
    setScore({ actuall: score.actuall + 1, highest: score.highest });
  };
  const resetGame = () => {
    setCardDatabase([]);
    setScore({ actuall: 0, highest: score.highest });
  };
  const SetHighestScore = () => {
    if (score.actuall >= score.highest) {
      return score.actuall;
    } else {
      return score.highest;
    }
  };
  const move = () => {
    const moveState = isContainCups(cardDatabase);
    if (moveState) {
      const highestScore = SetHighestScore();
      resetGame();
      setScore({ actuall: 0, highest: highestScore });
    } else {
      addPoint();
    }
  };
  const getValueFromBtn = (e) => {
    const homelessId = e.target.dataset.indexNumber;
    setCardDatabase((oldArray) => [...oldArray, homelessId]);
  };
  return (
    <div className="main-container">
      <ScoreBar actuallScore={score.actuall} highestScore={score.highest} />
      <div className="flex-container">
        <div className="homeless-content">
          {homeless.map((item) => {
            return (
              <img
                src={item.image}
                alt={item.data}
                key={item.id}
                data-index-number={item.id}
                onClick={(e) => {
                  shuffleStateHomeless();
                  getValueFromBtn(e);
                  playAudio(e);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Main;
