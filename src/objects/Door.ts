import { Position } from '../types/Position.type';

export default class Door {
    constructor() {
        this.name = 'door';
        this.altNames = null;
        this.description = 'A sturdy door';
        this.destination = null;
        this.locked = false;
    }

    name: string;
    altNames: string[] | null;
    description: string;
    destination: Position | null;
    locked: boolean;
}
