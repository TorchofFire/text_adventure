import { Articles } from '../constants/Words.constant';
import { ObjectId } from '../types/ObjectId.type';
import { Position } from '../types/Position.type';

export default class Door {
    constructor(name: string, id: ObjectId, description: string, destination: Position) {
        this.name = name;
        this.id = id;
        this.altNames = [];
        this.description = description;
        this.destination = destination;
        this.article = Articles.a;
        this.locked = false;
    }

    name: string;
    id: ObjectId;
    article: Articles;
    altNames: string[];
    description: string;
    destination: Position;
    locked: boolean;

    public setArticle(article: Articles): Door {
        this.article = article;
        return this;
    }

    public setAltNames(altNames: string[]): Door {
        this.altNames = altNames;
        return this;
    }
}
