import { ObjectId } from '../types/ObjectId.type';
import { Position } from '../types/Position.type';
import Player from './Player';
import Room from './Room';

export default class Game {
    constructor(title: string, description: string) {
        this.title = title;
        this.description = description;
        this.rooms = [new Room('Default Room', 'default', 'a default room with which you can customize', { x: 0, y: 0, z: 0 })];
        this.player = new Player('Roderick', this.rooms[0]);
        this.rooms[0].position = { x: 0, y: 0 };
    }

    title: string;
    description: string;
    rooms: Room[];
    player: Player;

    public newRoom(name: string, id: ObjectId, description: string, position: Position): Room {
        const room = new Room(name, id, description, position);
        this.rooms.push(room);
        return room;
    }
}
