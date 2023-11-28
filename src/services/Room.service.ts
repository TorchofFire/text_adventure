import { game } from '../main';
import Item from '../objects/Item';
import Room from '../objects/Room';
import { ObjectId } from '../types/ObjectId.type';

class RoomService {

    public getPlayerAdjacentRooms(): Room[] {
        const playerPosition = game.player.currentRoom.position;

        // TODO: account for locked doors

        return game.rooms.filter(room => {
            const roomPosition = room.position;

            const distance = Math.sqrt(
                (playerPosition.x - roomPosition.x) ** 2
                + (playerPosition.y - roomPosition.y) ** 2
                + (playerPosition.z - roomPosition.z) ** 2
            );

            if (distance === 0) return false;
            return distance <= 1;
        });
    }

    public getRoomsFromId(roomId: ObjectId): Room[] {
        return game.rooms.filter(room => room.id.endsWith(roomId));
    }

    public itemInCurrentRoom(item: Item): boolean {
        return game.player.currentRoom.items.includes(item);
    }

    public getAllRoomNames(room: Room): string[] {
        const roomNames = [room.name];
        roomNames.push(...room.altNames);
        return roomNames;
    }
}

export const roomService = new RoomService();
