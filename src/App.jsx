// https://opentdb.com/api_config.php

import React, { useState } from 'react'
import './App.css'
import Start from './components/Start'
import Game from './components/Game'
import Button from './components/Button'
import axios from 'axios'

const QuizContext = React.createContext()

export default function App() {

  // There are three states start, play and check
  const [gameState, setGameState] = useState("start")
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    // It may fetch twice in development due to strict mode.
    const fetchData = async () => {
      try {
        const result = await axios.get('https://opentdb.com/api.php?amount=4');
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    gameState == "start" && fetchData();
  }, [gameState]);

  function changeState() {
    console.log("changing state")
    gameState == "start" && (
      setGameState("check")
    )

    gameState == "check" && (
      setGameState("again")
    )

    gameState == "again" && (
      setGameState("start")
    )
  }

  return (
    <>
      <QuizContext.Provider value={{ gameState: gameState, changeState: changeState, data: data }}>
        <div className='main'>
          {gameState == "start" && <Start />}
          {(gameState == "check" || gameState == "again") && <Game />}
          <Button className='start--button'>{gameState}</Button>
        </div>
      </QuizContext.Provider>
    </>
  )

}

export { QuizContext }
