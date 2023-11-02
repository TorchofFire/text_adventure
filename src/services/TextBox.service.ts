import { TextElements } from '../constants/Elements.constant';
import { game } from '../main';

const textBox = document.getElementById('text-box') as HTMLDivElement;

class TextBoxService {

    describeScene(): void {
        const room = game.getRoomPlayerIsIn();
        let text = `You are in ${room.name}.`;
        text += `\nThere is${room.items.reduce((acc, value, index, items) => `${acc}${index === 0 ? ` ${value.article} ` : index === items.length - 1 ? `, and ${value.article} ` : `, ${value.article} `}${value.name}`, '')}`;
        // TODO: describe what places you are able to travel to
        this.appendTextElement(text, TextElements.paragraph);
    }

    appendTextElement(text: string, elementType: TextElements): void {
        const element = document.createElement(elementType);
        const textLines = text.split('\n');
        textLines.forEach((line, index) => {
            element.innerText += line;
            textBox.appendChild(element);
            if (index !== textLines.length - 1) element.appendChild(document.createElement('br'));
        });
        textBox.scrollTop = textBox.scrollHeight;
    }
}

export const textBoxService = new TextBoxService();
