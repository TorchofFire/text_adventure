import { Position } from '../types/Position.type';

export default class Door {
    constructor(name: string, description: string) {
        this.name = name;
        this.altNames = null;
        this.description = description;
        this.destination = null;
        this.locked = false;
    }

    name: string;
    altNames: string[] | null;
    description: string;
    destination: Position | null;
    locked: boolean;
}
