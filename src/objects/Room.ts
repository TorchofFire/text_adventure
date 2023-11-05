import Door from './Door';
import Player from './Player';
import { Position } from '../types/Position.type';
import Item from './Item';
import { ObjectId } from '../types/ObjectId.type';
import { Articles } from '../constants/Words.constant';

export default class Room {
    constructor(name: string, id: ObjectId, description: string) {
        this.name = name;
        this.id = id;
        this.altNames = [];
        this.description = description;
        this.player = null;
        this.position = null;
        this.article = Articles.the;
        this.doors = [];
        this.items = [];
    }

    name: string;
    id: ObjectId;
    altNames: string[];
    description: string;
    player: Player | null;
    position: Position | null;
    article: Articles;
    doors: Door[];
    items: Item[];

    newItem(name: string, id: ObjectId, description: string): Item {
        const item = new Item(name, id, description);
        this.items.push(item);
        return item;
    }
}
