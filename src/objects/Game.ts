import Player from './Player';
import Room from './Room';

export default class Game {
    constructor(title: string, description: string) {
        this.title = title;
        this.description = description;
        this.rooms = [new Room('Default Room', 'default', 'a default room with which you can customize')];
        this.player = new Player('Roderick', this.rooms[0]);
        this.rooms[0].position = { x: 0, y: 0 };
    }

    title: string;
    description: string;
    rooms: Room[];
    player: Player;
}
