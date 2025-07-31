import React from 'react';
import { useState } from 'react';
import './App.css';


const numberToGuess = 10

function App() {
  const [currentNumber, setCurrentNumber] = useState<number>(0)
  const [isGameFinished, setIsGameFinished] = useState<boolean>(false)
  const [gameMessage, setGameMessage] = useState<string>('Enter number')
  const [guess, setGuess] = useState<number[]>([])
  

  const handleSubmit = () => {
    console.log(currentNumber)
    if (currentNumber > numberToGuess) {
      setGameMessage(`${currentNumber} is too high`)
    } else if (currentNumber < numberToGuess) {
      setGameMessage(`${currentNumber} is too low`)
    } else {
      setGameMessage(`Correct! The number is ${currentNumber}`)
      setIsGameFinished(true)
    }
    setGuess([...guess, currentNumber])
  }

  const handleChange = (event: any) => {
    setCurrentNumber(Number(event.target.value))
  }

  const handleNewGame = () => {
    setCurrentNumber(0)
    setIsGameFinished(false)
    setGameMessage('Enter number')
  }

  return (
    <div className="container">
      <p>Enter a guess between 0 to 100</p>
      <input
        placeholder='Enter a number' className="input"
        type="number"
        value={currentNumber}
        onChange={handleChange}
      />

      <p>Enter a number between 0 and 100</p>
      <div className="actions">
        <button
          disabled={isGameFinished}
          style={{ padding: "10px" }}
          onClick={handleSubmit}>Submit</button>

        <button
          disabled={!isGameFinished}
          style={{ marginLeft: "10px" }}
          onClick={handleNewGame}>New Game</button>
      </div>
      <div className="message">
        {gameMessage && <p>{gameMessage}</p>}
        {guess.length > 0 && 
        <p> {`Your guesses: ${guess}`}</p>
        }
      </div>
    </div>
  );
}

export default App