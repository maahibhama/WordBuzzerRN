export const instructions = [
  '1. First Select Number of Words from available options.',
  '2. Click on Start Game it will navigate you to Game Screen.',
  '3. After Coming on Game Screen, decide to be any one of the four players and tap the respective buzzer when the game starts.',
  '4. Click on Start Game Button.',
  '5. On starting the game an English word will appear in the middle of the screen.',
  '6. A Spanish word will animate down to screen which may or may not be correct translation to a given English word.',
  '7. The user has to tap on the buzzer if he finds the translation to be correct.',
  '8. The user has 3 seconds to make a decision and tap buzzer after that buzzer will get disable.',
  '9. If the user taps for the correct translation and is also the first one to tap on the buzzer he/she will be awarded one point. And then the user has to click on Next Word to start again.',
  '10. Pop will appear to confirm the translated word for picked English word when no user is able to guess the translation.',
  '11. As pop up disappear user can select the Next word to start again.',
  '12. After completion of the game. The winner will be shown on the winner screen with the score.',
  "13. Users can also quit the game. The winner will announce according to the user's score.",
];

export const wordsData = require('../resource/words.json');

export const playerInfo = [
  {
    id: '1',
    name: '1st Player',
    score: '0',
    selectedTime: 0,
    isEnable: true,
    isRight: false,
    isWinner: false,
  },
  {
    id: '2',
    name: '2nd Player',
    score: '0',
    selectedTime: 0,
    isEnable: true,
    isRight: false,
    isWinner: false,
  },
  {
    id: '3',
    name: '3rd Player',
    score: '0',
    selectedTime: 0,
    isEnable: true,
    isRight: false,
    isWinner: false,
  },
  {
    id: '4',
    name: '4th Player',
    score: '0',
    selectedTime: 0,
    isEnable: true,
    isRight: false,
    isWinner: false,
  },
];
