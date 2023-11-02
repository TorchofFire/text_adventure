import Door from './Door';
import Player from './Player';
import { Position } from '../types/Position.type';
import Item from './Item';

export default class Room {
    constructor(name: string, description: string) {
        this.name = name;
        this.altNames = [];
        this.description = description;
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

    newItem(name: string, description: string): Item {
        const item = new Item(name, description);
        this.items.push(item);
        return item;
    }
}
