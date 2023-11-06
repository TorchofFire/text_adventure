import Door from './Door';
import { Position } from '../types/Position.type';
import Item from './Item';
import { ObjectId } from '../types/ObjectId.type';
import { Articles } from '../constants/Words.constant';

export default class Room {
    constructor(name: string, id: ObjectId, description: string, position: Position) {
        this.name = name;
        this.id = id;
        this.altNames = [];
        this.description = description;
        this.position = position;
        this.article = Articles.the;
        this.doors = [];
        this.items = [];
    }

    name: string;
    id: ObjectId;
    altNames: string[];
    description: string;
    position: Position;
    article: Articles;
    doors: Door[];
    items: Item[];

    public newItem(name: string, id: ObjectId, description: string): Item {
        const item = new Item(name, id, description);
        this.items.push(item);
        return item;
    }

    public setAltName(names: string[]): Room {
        this.altNames = names;
        return this;
    }

    public setArticle(article: Articles): Room {
        this.article = article;
        return this;
    }
}
