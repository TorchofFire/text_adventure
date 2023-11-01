import Door from './Door';
import Player from './Player';
import { Position } from '../types/Position.type';
import Item from './Item';

export default class Room {
    constructor() {
        this.name = 'Room Name';
        this.altNames = [];
        this.description = 'Room Description';
        this.player = null;
        this.position = null;
        this.doors = [];
        this.items = [];
    }

    name: string;
    altNames: string[];
    description: string;
    player: Player | null;
    position: Position | null;
    doors: Door[];
    items: Item[];

    newItem(): Item {
        const item = new Item();
        this.items.push(item);
        return item;
    }
}
