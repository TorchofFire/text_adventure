import { TextElements } from '../constants/Elements.constant';
import { game } from '../main';
import { gameService } from './Game.service';
import { roomService } from './Room.service';

const textBox = document.getElementById('text-box') as HTMLDivElement;

class TextBoxService {

    public describeScene(): void {
        const currentRoom = game.player.currentRoom;
        let text = `You are ${currentRoom.preposition} ${currentRoom.article} ${currentRoom.name}.`;
        text += '\n';
        text += `${currentRoom.description}`;
        text += '\n';
        if (currentRoom.items.length > 0) {
            text += `There is${currentRoom.items.reduce((acc, item, index) => `${acc}${index === 0 ? ` ${item.article} ` : index === currentRoom.items.length - 1 ? `, and ${item.article} ` : `, ${item.article} `}${item.name}`, '')}`;
            text += '.';
        } else {
            text += 'There isn\'t anything worth mentioning in sight.';
        }
        text += '\n';
        const doors = currentRoom.doors;
        const adjacentRooms = roomService.getPlayerAdjacentRooms().filter(room => doors.some(door => door.destination === room.position));
        if (doors.length > 0) {
            text += `You can see${doors.reduce((acc, door, index) => `${acc}${index === 0 ? ` ${door.article} ` : index === doors.length - 1 ? `, or ${door.article} ` : `, ${door.article} `}${door.name} in the ${gameService.getDirectionFromPlayer(door.destination)}`, '')}`;
            text += '. ';
        }
        if (adjacentRooms.length > 0) {
            text += `You can walk to${adjacentRooms.reduce((acc, room, index) => `${acc}${index === 0 ? ` ${room.article} ` : index === adjacentRooms.length - 1 ? `, or ${room.article} ` : `, ${room.article} `}${room.name} in the ${gameService.getDirectionFromPlayer(room.position)}`, '')}`;
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
