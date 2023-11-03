import { ObjectId } from '../types/ObjectId.type';
import { Position } from '../types/Position.type';

export default class Door {
    constructor(name: string, id: ObjectId, description: string) {
        this.name = name;
        this.id = id;
        this.altNames = null;
        this.description = description;
        this.destination = null;
        this.locked = false;
    }

    name: string;
    id: ObjectId;
    altNames: string[] | null;
    description: string;
    destination: Position | null;
    locked: boolean;
}
