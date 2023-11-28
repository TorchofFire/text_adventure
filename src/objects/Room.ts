import Door from './Door';
import { Position } from '../types/Position.type';
import Item from './Item';
import { ObjectId } from '../types/ObjectId.type';
import { Articles, Prepositions } from '../constants/Words.constant';

export default class Room {
    constructor(name: string, id: ObjectId, description: string, position: Position) {
        this.name = name;
        this.id = id;
        this.altNames = [];
        this.description = description;
        this.position = position;
        this.article = Articles.the;
        this.preposition = Prepositions.in;
        this.doors = [];
        this.items = [];
    }

    name: string;
    id: ObjectId;
    altNames: string[];
    description: string;
    position: Position;
    article: Articles;
    preposition: Prepositions;
    doors: Door[];
    items: Item[];

    public newItem(name: string, id: ObjectId, description: string): Item {
        const item = new Item(name, id, description);
        this.items.push(item);
        return item;
    }

    public newDoor(name: string, id: ObjectId, description: string, destination: Position): Door {
        const door = new Door(name, id, description, destination);
        this.doors.push(door);
        return door;
    }

    public setAltNames(names: string[]): Room {
        this.altNames = names;
        return this;
    }

    public setDescription(description: string): Room {
        this.description = description;
        return this;
    }

    public setPreposition(preposition: Prepositions): Room {
        this.preposition = preposition;
        return this;
    }

    public setArticle(article: Articles): Room {
        this.article = article;
        return this;
    }
}
