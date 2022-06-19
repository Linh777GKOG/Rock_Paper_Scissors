const selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]');
const computerScoreSpan = document.querySelector('[data-computer-score]');
const yourScoreSpan = document.querySelector('[data-your-score]');
const SELECTIONS = [
  {
    name: 'rock',
    emoji: '✊',
    beats: 'scissors',
  },
  {
    name: 'paper',
    emoji: '✋',
    beats: 'rock',
  },
  {
    name: 'scissors',
    emoji: '✌',
    beats: 'paper',
  },
];
