import React, { useState } from 'react';

const NumberGuessingComponent = () => {
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');
  const [randomNumber, setRandomNumber] = useState(null);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  }

  const checkGuess = () => {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(newRandomNumber)
    setRandomNumber(newRandomNumber);

    if (parseInt(userInput) === newRandomNumber) {
      setMessage(`You guessed the correct number! The random number was ${newRandomNumber}`);
    } else {
      setMessage(`Wrong number guessed. The random number was ${newRandomNumber}. Try again!`);
    }
  }

  return (
    <div>
      <p>Guess a number between 1 and 100:</p>
      <input
        type="number"
        value={userInput}
        onChange={handleInputChange}
      />
      <br></br>
      <button onClick={checkGuess}>Check Guess</button>
      <p>{message}</p>
    </div>
  );
}

export default NumberGuessingComponent;
