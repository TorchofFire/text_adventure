import { game } from "../main";
import Player from "./Player";
import Room from "./Room";

export default class Game {
    constructor() {
        this.title = 'Game Title';
        this.description = 'Game Description';
        this.rooms = [new Room()];
        this.rooms[0].player = new Player();
        this.rooms[0].position = {x: 0, y: 0};
    }
    title: string;
    description: string;
    rooms: Room[];

    public getRoomPlayerIsIn(): Room {
        return game.rooms.filter(x => x.player !== null)[0];
    }
}