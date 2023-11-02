import Item from './Item';

export default class Player {
    constructor(name: string) {
        this.name = name;
        this.inventory = [];
    }

    name: string;
    inventory: Item[];
}
