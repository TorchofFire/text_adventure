import { TextElements } from './constants/Elements.constant';
import Game from './objects/Game';
import { actionService } from './services/Action.service';
import { gameManagerService } from './services/GameManager.service';
import { textBoxService } from './services/TextBox.service';
const userInputForm = document.getElementById('user-input-form') as HTMLFormElement;
const userInput = document.getElementById('user-input') as HTMLInputElement;
// eslint-disable-next-line import/no-mutable-exports
export let game: Game;

function startGame(): void {
    const mainTitle = document.getElementById('main-title') as HTMLElement;
    mainTitle.textContent = 'Loading...';
    game = gameManagerService.testGame();
    textBoxService.appendTextElement(game.title, TextElements.h3);
    textBoxService.appendTextElement(game.description, TextElements.paragraph);
    textBoxService.appendTextElement('', TextElements.horizontalrule);
    mainTitle.textContent = game.title;
    textBoxService.describeScene();
    console.log('Game Started', game);
}

// Window is ready
document.addEventListener('DOMContentLoaded', () => {
    startGame();
});

const commandHistory: string[] = [];
let historyIndex = -1;

userInputForm.addEventListener('submit', event => {
    event.preventDefault();
    const userText = userInput.value.trim();
    if (!userText) return;

    commandHistory.unshift(userText);
    historyIndex = -1;

    textBoxService.appendTextElement(`> ${userText}`, TextElements.paragraph);
    actionService.doAction(userText);

    userInput.value = '';
});

userInputForm.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (commandHistory.length - 1 > historyIndex) {
            historyIndex++;
            userInput.value = commandHistory[historyIndex];
        }
        return;
    }
    if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            userInput.value = commandHistory[historyIndex];
        }
        return;
    }
    historyIndex = -1;
});
