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

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener('click', (e) => {
    const selectionName = selectionButton.dataset.selection;
    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );
    makeSelection(selection);
  });
});

function makeSelection(selection) {
  const computerSelection = randomSelection();
  const yourWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);

  addSelectionResult(computerSelection, computerWinner);
  addSelectionResult(selection, yourWinner);

  if (yourWinner) incrementScore(yourScoreSpan);
  if (computerWinner) incrementScore(computerScoreSpan);
}
