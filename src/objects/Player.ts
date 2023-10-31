import Item from "./Item";

export default class Player {
    constructor() {
        this.name = 'Roderick';
        this.inventory = [];
    }
    name: string;
    inventory: Item[];
}