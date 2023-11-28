import { Directions } from '../constants/Words.constant';
import { game } from '../main';
import { Position } from '../types/Position.type';

class GameService {
    public getDirectionFromPlayer(position: Position): Directions {
        const currentRoom = game.player.currentRoom;
        if (position?.z && currentRoom.position?.z && position?.z !== currentRoom.position?.z) {
            if (position.z > currentRoom.position.z) return Directions.up;
            return Directions.down;
        }
        if (position.y !== currentRoom.position.y) {
            if (position.y > currentRoom.position.y) return Directions.north;
            return Directions.south;
        }
        if (position.x > currentRoom.position.x) return Directions.east;
        return Directions.west;
    }

    public compareIfPositionEqual(position1: Position, position2: Position): boolean {
        return (position1.x === position2.x && position1.y === position2.y && position1.z === position2.z);
    }
}

export const gameService = new GameService();
