import { TextElements } from './constants/Elements.constant';
import Game from './objects/Game';
import { actionService } from './services/Action.service';
import { gameManagerService } from './services/GameManager.service';
import { textBoxService } from './services/TextBox.service';
const userInputForm = document.getElementById('user-input-form') as HTMLFormElement;
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

userInputForm.addEventListener('submit', event => {
    const userInput = document.getElementById('user-input') as HTMLInputElement;
    event.preventDefault();
    const userText = userInput.value.trim();
    if (!userText) return;

    textBoxService.appendTextElement(`> ${userText}`, TextElements.paragraph);
    actionService.doAction(userText);
    console.log(game);

    userInput.value = '';
});
