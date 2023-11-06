import { TextElements } from '../constants/Elements.constant';
import { game } from '../main';
import { roomService } from './Room.service';

const textBox = document.getElementById('text-box') as HTMLDivElement;

class TextBoxService {

    public describeScene(): void {
        const currentRoom = game.player.currentRoom;
        let text = `You are in ${currentRoom.article} ${currentRoom.name}.`;
        text += '\n';
        if (currentRoom.items.length > 0) {
            text += `There is${currentRoom.items.reduce((acc, item, index, items) => `${acc}${index === 0 ? ` ${item.article} ` : index === items.length - 1 ? `, and ${item.article} ` : `, ${item.article} `}${item.name}`, '')}`;
            text += '.';
        } else {
            text += 'There isn\'t anything worth mentioning in sight.';
        }
        const adjacentRooms = roomService.getPlayerAdjacentRooms();
        if (adjacentRooms.length > 0) {
            text += '\n';
            text += `You can walk to${adjacentRooms.reduce((acc, room, index, rooms) => `${acc}${index === 0 ? ` ${room.article} ` : index === rooms.length - 1 ? `, or ${room.article} ` : `, ${room.article} `}${room.name} in the ${roomService.getDirectionFromPlayer(room)}`, '')}`;
            text += '.';
        }
        this.appendTextElement(text, TextElements.paragraph);
    }

    public appendTextElement(text: string, elementType: TextElements): void {
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
