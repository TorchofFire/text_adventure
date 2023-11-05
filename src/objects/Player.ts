import Item from './Item';
import Room from './Room';

export default class Player {
    constructor(name: string, startingRoom: Room) {
        this.name = name;
        this.inventory = [];
        this.currentRoom = startingRoom;
    }

    name: string;
    inventory: Item[];
    currentRoom: Room;
}
