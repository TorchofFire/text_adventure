import { game } from '../main';
import Item from '../objects/Item';
import Room from '../objects/Room';
import { ObjectId } from '../types/ObjectId.type';

class RoomService {
    public getRoomsFromId(roomId: ObjectId): Room[] {
        return game.rooms.filter(room => room.id.endsWith(roomId));
    }

    public itemInCurrentRoom(item: Item): boolean {
        return game.player.currentRoom.items.includes(item);
    }
}

export const roomService = new RoomService();
