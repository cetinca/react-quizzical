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
        const result = await axios.get('https://opentdb.com/api.php?amount=5');
        setData(result.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    gameState == "start" && fetchData();
  }, [gameState]);

  return (
    <>
      <QuizContext.Provider value={{ gameState: gameState, setGameState:setGameState, data: data, setData: setData }}>
        <div className='main'>
          {gameState == "start" && <Start />}
          {(gameState == "check" || gameState == "again") && <Game />}
          
        </div>
      </QuizContext.Provider>
    </>
  )

}

export { QuizContext }
